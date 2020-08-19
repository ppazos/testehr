package org.openehr.testehr

import groovy.cli.Option

interface AppArgs {
    @Option(description='number of EHRs to create') int ehrs()
    @Option(description='operational template file location') String template()
    @Option(description='number of compositions to commit') int compositions()
    @Option(description='AQL request body file location') String aql()
    @Option(description='multiply the tempalte tests by this number', defaultValue="1") int scaleTemplates()
}