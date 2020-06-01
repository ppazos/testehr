package org.openehr.testehr

import groovy.json.JsonSlurper
import groovy.util.CliBuilder

class App {
    String getGreeting() {
        return 'Hello world.'
    }

    static void main(String[] args)
    {
        //println new App().greeting

        println args

        //if (args.size() == 0)
        //{
            def cli = new CliBuilder(usage:'testehr [options]', header:'Options:')
            cli.ehrs(args:1, argName:'ehrs', 'number of EHRs to create')
        //}

        cli.usage()

        def options = cli.parse(args)

        println options.ehrs

        // ---------------------------------------------------------------------

        def base_url = 'http://192.168.1.110:8080/ehrbase/rest/openehr/v1'

        // Create EHR
        def post = new URL(base_url +"/ehr").openConnection()
        def body = '' // '{"message":"this is a message"}'

        post.setRequestMethod("POST")
        post.setDoOutput(true)
        
        //post.setRequestProperty("Content-Type", "application/json")
        post.setRequestProperty("Prefer", "return=representation")
        post.setRequestProperty("Accept", "application/json")

        //post.getOutputStream().write(body.getBytes("UTF-8"));
        def status = post.getResponseCode()
        
        println status

        if(status.equals(201))
        {
            def response_body = post.getInputStream().getText()
            def json_parser = new JsonSlurper()
            def ehr = json_parser.parseText(response_body)

            println ehr.ehr_id.value
        }
        else
        {
            println post.getInputStream().getText()
        }
    }
}
