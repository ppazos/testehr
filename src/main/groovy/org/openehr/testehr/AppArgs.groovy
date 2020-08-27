package org.openehr.testehr

import groovy.cli.Option

interface AppArgs {
    @Option(description='number of EHRs to create') int ehrs()
    @Option(description='operational template file location') String template()
    @Option(description='number of compositions to commit') int compositions()
    @Option(description='AQL request body file location') String aql()
    @Option(description='multiply the template tests by this number', defaultValue="1") int scaleTemplates()
    @Option(description='repeat the AQL execution N times to calculate the AVG, MIN and MAX', defaultValue="1") int repeatAql()
}