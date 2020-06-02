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

$ gradle run --args="-ehrs 2 -template ../openEHR-OPT/resources/opts/com.cabolabs.openehr_opt.namespaces.default/Review.opt -compositions 3"


fatJar run

$ java -jar build/libs/load-testehr-all.jar -ehrs 2 -template ~/GitHub/openEHR-OPT/resources/opts/com.cabolabs.openehr_opt.namespaces.default/Review.opt -compositions 3
