package org.openehr.testehr

import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.cli.commons.CliBuilder // groovy.util.CliBuilder
import com.cabolabs.openehr.opt.parser.OperationalTemplateParser
import com.cabolabs.openehr.opt.model.OperationalTemplate
import com.cabolabs.openehr.opt.instance_generator.JsonInstanceCanonicalGenerator2
import java.util.Properties
import java.io.InputStream

class App {

    static String base_url // = 'http://192.168.1.110:8080/ehrbase/rest/openehr/v1'

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

    // parses the opt from the file, the caller already checked the file exists
    OperationalTemplate readTemplate(File opt_file)
    {
        def parser = new OperationalTemplateParser()
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
    Map witnessQuery(String aql_body)
    {
        def post, status
        try
        {
            post = new URL(base_url +"/query/aql").openConnection()

            post.setRequestMethod("POST")
            post.setDoOutput(true)
            post.setRequestProperty("Content-Type", "application/json")
            //post.setRequestProperty("Prefer", "return=representation")
            post.setRequestProperty("Accept", "application/json")

            post.getOutputStream().write(aql_body.getBytes("UTF-8"))

            status = post.getResponseCode()

            if ([200].contains(status))
            {
                return [result: 'ok']
            }
            else
            {
                /*
                def response_body = post.getInputStream().getText()
                def json_parser = new JsonSlurper()
                def response = json_parser.parseText(response_body)
                response.error
                // {"error":"Could not retrieve stored query, reason:java.lang.NullPointerException","status":"Bad Request"}
                */

                // if !2xx, the body should be read using getErrorStream(), getInputStream() only works for 2xx
                return [result: 'error', error: post.getErrorStream().getText()]
            }
        }
        catch (Exception e) // connection issues
        {
            return [result: 'error', error: e.message]
        }
    }

    static void main(String[] args)
    {
        //println args

        // --------------------------------------------------------------------------
        // load config
        
        try
        {
            //println getClass().getResource('/config.properties') // works!
            InputStream is = getClass().getResourceAsStream("/config.properties")    
            Properties properties = new Properties()
            properties.load(is)

            //println properties.base_url

            base_url = properties.base_url
        }
        catch (Exception e)
        {
            println "Can't load config.properties"
            System.exit(0)
        }


        // --------------------------------------------------------------------------
        // Util
        
        java.util.ArrayList.metaClass.pick {
            delegate.get( new Random().nextInt( delegate.size() ) )
        }

        def cli = new CliBuilder(usage:'testehr [options]', header:'Options:')
        //cli.ehrs(args:1, argName:'ehrs', 'number of EHRs to create')
        //cli.template(args:1, argName:'template', 'operational template file location')


        // --------------------------------------------------------------------------
        // Argument processing

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

        if (!template_location)
        {
           println "template parameter wasn't provided"
           cli.usage()
           System.exit(0)
        }

        def template_file = new File(template_location)

        if (!template_file.exists())
        {
           println "template file doesn't exists at ${template_location}"
           cli.usage()
           System.exit(0)
        }

        if (!aql_location)
        {
           println "aql parameter wasn't provided"
           cli.usage()
           System.exit(0)
        }
        
        def aql_file = new File(aql_location)

        if (!aql_file.exists())
        {
           println "aql file doesn't exists at ${aql_location}"
           cli.usage()
           System.exit(0)
        }


        // If aql_file is a folder, read the JSON files in that folder and execute all of them as queries, then report back each individual result
        def aql_files = []
        if (aql_file.isDirectory())
        {
            aql_file.eachFileMatch(~/.*\.json/) { aql ->
                aql_files << aql
            }
        }
        else
        {
            aql_files << aql_file
        }


        //println ehr_count
        //println template_location


        // --------------------------------------------------------------------------
        // Test execution

        def testehr = new App()


        // 1. parse template, check if invalid
        def opt = testehr.readTemplate(template_file)

        if (!opt)
        {
            println "There was a problem parsing the OPT, please verify it's valid"
            System.exit(0)
        }

        // ---------------------------------------------------------------------


        // 2. create EHRs
        println "Creating EHRs..."
        ehr_count.times {
            testehr.createEHR()
        }


        // 3. check template exists
        println "Checking template exists in the server..."
        if (!testehr.templateExists(opt.templateId))
        {
            println "Template ${opt.templateId} is not in the server"

            // 4. upload template
            testehr.uploadTemplate(template_location)
        }
        else
        {
            println "Template ${opt.templateId} exists in the server"
        }


        // 5. generate compositions
        println "Committing auto-generated compositions..."
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
        println "Testing ${aql_files.size()} queries..."

        // 6.1. set the ehr_id in the query
        def aql_json, aql_body, before, after, query_result
        def out_log = new File("out_${new Date().format("yyyyMMddhhmmss")}.log")

        aql_files.sort{ it.name }.eachWithIndex { aql, i ->

            aql_json = new JsonSlurper().parseText(aql.text)

            // set the ehr_id only if there it is in the query json
            if (aql_json.query_parameters && aql_json.query_parameters.ehr_id)
            {
                aql_json.query_parameters.ehr_id = testehr.ehr_ids.pick()
                aql_body = JsonOutput.toJson(aql_json)
            }

            // 6.2. execute the query
            print "Executing query ${(i+1).toString().padLeft(2)}) ${aql.name}".padRight(75)
            
            before = System.currentTimeMillis()
            query_result = testehr.witnessQuery(aql_body)
            if (query_result.result == 'error')
            {
                print "ERROR".padRight(8)
                out_log << aql.name.padRight(75) + query_result.error + "\n"
            }
            else
            {
                print "OK".padRight(8)
            }
            after = System.currentTimeMillis()

            println "\t${(after - before)} ms"
        }



        // 7. report
        println ""
        println "EHRs Requested: ${ehr_count} / EHRs Created: ${testehr.ehr_ids.size()}"
        println "Compositions Requested: ${composition_count} / Compositions Committed: ${committed_compositions}"

    }
}
