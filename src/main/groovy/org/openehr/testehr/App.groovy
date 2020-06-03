package org.openehr.testehr

import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.cli.commons.CliBuilder // groovy.util.CliBuilder
import com.cabolabs.openehr.opt.parser.OperationalTemplateParser
import com.cabolabs.openehr.opt.model.OperationalTemplate
import com.cabolabs.openehr.opt.instance_generator.JsonInstanceCanonicalGenerator2

class App {

    static String base_url = 'http://192.168.1.110:8080/ehrbase/rest/openehr/v1'

    def ehr_ids = []

    boolean createEHR()
    {
        try
        {
            def post = new URL(base_url +"/ehr").openConnection()
            def body = '' // '{"message":"this is a message"}' // add to send a status

            post.setRequestMethod("POST")
            post.setDoOutput(true)
            
            //post.setRequestProperty("Content-Type", "application/json") // add to send a status
            post.setRequestProperty("Prefer", "return=representation")
            post.setRequestProperty("Accept", "application/json")

            //post.getOutputStream().write(body.getBytes("UTF-8"));
            def status = post.getResponseCode()

            if (status.equals(201))
            {
                def response_body = post.getInputStream().getText()
                def json_parser = new JsonSlurper()
                def ehr = json_parser.parseText(response_body)

                // register the ehr_id for later commits
                ehr_ids << ehr.ehr_id.value

                return true
            }
            else
            {
                //println post.getInputStream().getText()
            }

            return false
        }
        catch (Exception e) // connection issues
        {
            println e.message
            return false
        }
    }

    OperationalTemplate readTemplate(String template_location)
    {
        def parser = new OperationalTemplateParser()
        def opt_file = new File(template_location)

        if (!opt_file.exists())
        {
            println "File ${template_location} doesn't exist"
            return
        }

        try
        {
           def opt = parser.parse(opt_file.text)
           return opt
        }
        catch (Exception e)
        {
            println e.message
            return
        }
    }

    // true if the template exists, false if not
    boolean templateExists(String template_id)
    {
        try
        {
            def post = new URL(base_url +"/definition/template/adl1.4/"+ template_id).openConnection()

            post.setRequestMethod("GET")
            post.setRequestProperty("Accept", "application/xml")
            
            def status = post.getResponseCode()

            if (status.equals(200))
            {
                return true
            }

            return false
        }
        catch (Exception e)
        {
            println e.message
            return false
        }
    }

    // tries to upload an OPT, returns true if it was uploaded correctly, false if not
    boolean uploadTemplate(String template_location)
    {
        try
        {
            def post = new URL(base_url +"/definition/template/adl1.4").openConnection()

            def opt_file = new File(template_location)

            def body = opt_file.text

            post.setRequestMethod("POST")
            post.setDoOutput(true)
            post.setRequestProperty("Content-Type", "application/xml")
            //post.setRequestProperty("Prefer", "return=representation")
            post.setRequestProperty("Accept", "application/xml")
            post.getOutputStream().write(body.getBytes("UTF-8"))

            def status = post.getResponseCode()

            if ([201, 204].contains(status))
            {
                return true
            }

            return false
        }
        catch (Exception e) // connection issues
        {
            println e.message
            return false
        }
    }

    boolean commitComposition(String ehr_id, String json_compo)
    {
        try
        {
            def post = new URL(base_url +"/ehr/${ehr_id}/composition").openConnection()

            def body = json_compo

            post.setRequestMethod("POST")
            post.setDoOutput(true)
            post.setRequestProperty("Content-Type", "application/json")
            //post.setRequestProperty("Prefer", "return=representation")
            //post.setRequestProperty("Accept", "application/xml")
            post.getOutputStream().write(body.getBytes("UTF-8"))

            def status = post.getResponseCode()

            if ([201, 204].contains(status))
            {
                return true
            }

            return false
        }
        catch (Exception e) // connection issues
        {
            println e.message
            return false
        }
    }

    // executes a query to check for it's execution time
    boolean witnessQuery(String aql_body)
    {
        try
        {
            def post = new URL(base_url +"/query/aql").openConnection()

            def body = aql_body

            post.setRequestMethod("POST")
            post.setDoOutput(true)
            post.setRequestProperty("Content-Type", "application/json")
            //post.setRequestProperty("Prefer", "return=representation")
            post.setRequestProperty("Accept", "application/json")
            post.getOutputStream().write(body.getBytes("UTF-8"))

            def status = post.getResponseCode()

            if ([200].contains(status))
            {
                return true
            }

            return false
        }
        catch (Exception e) // connection issues
        {
            println e.message
            return false
        }
    }

    static void main(String[] args)
    {
        //println args

        // Util
        java.util.ArrayList.metaClass.pick {
            delegate.get( new Random().nextInt( delegate.size() ) )
        }

        def cli = new CliBuilder(usage:'testehr [options]', header:'Options:')
        //cli.ehrs(args:1, argName:'ehrs', 'number of EHRs to create')
        //cli.template(args:1, argName:'template', 'operational template file location')

        def options = cli.parseFromSpec(AppArgs, args)

        if (args.size() < 8)
        {
           cli.usage()
           System.exit(0)
        }

        //println options
        //println options.ehrs()

        def ehr_count = options.ehrs()
        def template_location = options.template()
        def composition_count = options.compositions()
        def aql_location = options.aql()

        //println ehr_count
        //println template_location

        // ---------------------------------------------------------------------

        def testehr = new App()

        // 1. create EHRs
        println "Creating EHRs..."
        ehr_count.times {
            testehr.createEHR()
        }

        // 2. parse template
        def opt = testehr.readTemplate(template_location)

        // 3. check template exists
        if (!testehr.templateExists(opt.templateId))
        {
            println "template ${opt.templateId} is not on the server"

            // 4. upload template
            testehr.uploadTemplate(template_location)
        }
        else
        {
            println "template ${opt.templateId} already exists on the server"
        }


        // 5. generate compositions
        def committed_compositions = 0
        composition_count.times {

            def generator = new JsonInstanceCanonicalGenerator2()
            String json_compo = generator.generateJSONCompositionStringFromOPT(opt)

            // 5.1. commit compositions
            if (testehr.commitComposition(testehr.ehr_ids.pick(), json_compo))
            {
                committed_compositions ++
            }
        }


        // 6. witness query

        // 6.1. set the ehr_id in the query
        def aql_json = new JsonSlurper().parseText(new File(aql_location).text)
        aql_json.query_parameters.ehr_id = testehr.ehr_ids.pick()
        def aql_body = JsonOutput.toJson(aql_json)

        // 6.2. execute the query
        def before = System.currentTimeMillis()
        if (!testehr.witnessQuery(aql_body))
        {
            println "There was a problem running the query"
        }
        def after = System.currentTimeMillis()


        // 7. report
        println "EHRs Requested: ${ehr_count} / EHRs Created: ${testehr.ehr_ids.size()}"
        println "Compositions Requested: ${composition_count} / Compositions Committed: ${committed_compositions}"
        println "Query time: ${(after - before)} ms"
    }
}
