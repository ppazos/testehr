# testehr

Load tester for the openEHR API


## Configuration

In src/main/resources/config.properties you can set the base_url parameter which is the server address and path to the openEHR REST API.
Modify it before start testing against your server.


## Build

$ ./gradlew build

or

$ gradle build


## Package

This generates a jar with all the dependencies so it can be executed standalone.

$ gradle fatJar


## Run

Gradle run

$ gradle run --args="-ehrs 1 -template src/main/resources/opts/LabResults1.opt -compositions 3 -aql src/main/resources/queries/LabResults1.json"

fatJar run

$ java -jar build/libs/load-testehr-all.jar -ehrs 2 -template src/main/resources/opts/LabResults1.opt -compositions 3 -aql src/main/resources/queries/LabResults1.json


### Arguments

 - ehrs: is the number of EHRs to be created
 - template: is the path of a valid OPT file
 - compositions: is the number if COMPOSITIONS to be committed (distributed randomly between the created EHRs)
 - aql: is a witness query, related with the OPT, used to measure query execution times, the file should contain a valid JSON request for the POST /query/aql openEHR REST endpoint
 - scaleTemplates: optional argument, if provided it will use the provided template to create other templates with different template_id, and repeat the tests for that number of templates, scaleTemplates should be > 0.


### Examples

In the src/main/resources there are two folders with examples to run tests. One folder contains the Operational Templates and the other one correspondent AQL queries. When running a test, you need to use the OPT and query with the same name for the -template and -aql arguments mentioned above.