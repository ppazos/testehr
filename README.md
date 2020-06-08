# testehr

Load tester for the openEHR API

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

 - ehrs is the number of EHRs to be created
 - template is the path of a valid OPT file
 - compositions is the number if COMPOSITIONS to be committed (distributed randomly between the created EHRs)
 - aql is a witness query, related with the OPT, used to measure query execution times, the file should contain a valid JSON request for the POST /query/aql openEHR REST endpoint
