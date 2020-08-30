export const aqlPatientBloodPressure = `
    SELECT w/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value as systolic,
           w/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value as diastolic,
           w/data[at0001]/events[at0006]/time/value/value as time
    FROM EHR e
    CONTAINS COMPOSITION c
    CONTAINS (OBSERVATION w[openEHR-EHR-OBSERVATION.blood_pressure.v2])
    where e/ehr_id/value = $ehrId
    order by w/data[at0001]/events[at0006]/time/value/value desc`;


/*** testd without the order by */
export const aqlPatientPulse =`
        SELECT j/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value as pulse,
             j/data[at0002]/events[at0003]/time/value/value as time
        FROM EHR e
        CONTAINS COMPOSITION c
        CONTAINS OBSERVATION j[openEHR-EHR-OBSERVATION.pulse.v2]
        where e/ehr_id/value = $ehrId
        order by j/data[at0002]/events[at0003]/time/value/value desc`;

export const aqlPatientTemperature= `
      SELECT h/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value as temperature,
             h/data[at0002]/events[at0003]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION h[openEHR-EHR-OBSERVATION.body_temperature.v2]
        where e/ehr_id/value = $ehrId
        order by h/data[at0002]/events[at0003]/time/value/value desc`;


export const aqlPatientLabResults = `
      `;


export const aqlPatientSavedCompositions = `
      SELECT c/uid/value as uid,
             c/context/start_time/value as time,
             c/archetype_details/template_id/value as templateId
      FROM EHR e
      CONTAINS COMPOSITION c
      where e/ehr_id/value = $ehrId
      order by c/context/start_time desc`;


export const aqlPatientSofaScore = `
      SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0010]/value/magnitude as score,
             x/data[at0001]/events[at0002]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.sofa_score.v0]
      where e/ehr_id/value = $ehrId
      order by x/data[at0001]/events[at0002]/time/value/value desc`;


export const aqlPatientQSofaScore = `
      SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0005]/value/magnitude as score,
             x/data[at0001]/events[at0002]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.qsofa_score.v1]
      where e/ehr_id/value = $ehrId
      order by x/data[at0001]/events[at0002]/time/value/value desc`;


export const aqlPatientMurrayScore = `
      SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0039]/value/magnitude as score,
             x/data[at0001]/events[at0002]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.murray_score.v0]
      where e/ehr_id/value = $ehrId
      order by x/data[at0001]/events[at0002]/time/value/value desc`;


export const aqlPatientFrailtyScore = `
      SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/value as score,
             x/data[at0001]/events[at0002]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.clinical_frailty_scale.v0]
      where e/ehr_id/value = $ehrId
      order by x/data[at0001]/events[at0002]/time/value/value desc`;


export const aqlPatientCovidLabResults = ``;


export const aqlPatientAge = `
      SELECT s/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/value as age
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION s[openEHR-EHR-OBSERVATION.age.v0]
      where e/ehr_id/value = $ehrId `;


export const aqlPatientSex = `
      SELECT p/data[at0002]/items[at0022]/value/value as sex
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS EVALUATION p[openEHR-EHR-EVALUATION.gender.v1]
      where e/ehr_id/value = $ehrId`;


export const aqlPatientWeight = `
      SELECT m/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as magnitude,
             m/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as units,
             m/data[at0002]/events[at0003]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION m[openEHR-EHR-OBSERVATION.body_weight.v2]
      where e/ehr_id/value = $ehrId
      order by m/data[at0002]/events[at0003]/time/value/value desc`;


export const aqlPatientHeight = `
      SELECT j/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/magnitude as magnitude,
             j/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/units as units,
             j/data[at0001]/events[at0002]/time/value/value as time
      FROM EHR e
      CONTAINS COMPOSITION c
      CONTAINS OBSERVATION j[openEHR-EHR-OBSERVATION.height.v2]
      where e/ehr_id/value = $ehrId
      order by j/data[at0001]/events[at0002]/time/value/value desc`;


export const aqlPatientCovidSymptoms = `
      select
          a_a/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Husten,
          a_b/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Schnupfen,
          a_c/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Heiserkeit,
          a_d/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Fieber,
          a_f/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Geruchsinn,
          a_g/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Geschmacksinn,
          a_h/data[at0001]/events[at0002]/data[at0003]/items[at0022]/items[at0005]/value/value as Durchfall,
          a/context/start_time/value as Erfassungsdatum
      from EHR e
      contains COMPOSITION a
      contains (
          OBSERVATION a_a[openEHR-EHR-OBSERVATION.symptom_sign_screening_husten.v0] and
          OBSERVATION a_b[openEHR-EHR-OBSERVATION.symptom_sign_screening_schnupfen.v0] and
          OBSERVATION a_c[openEHR-EHR-OBSERVATION.symptom_sign_screening_heiserkeit.v0] and
          OBSERVATION a_d[openEHR-EHR-OBSERVATION.symptom_sign_screening.v0] and
          OBSERVATION a_f[openEHR-EHR-OBSERVATION.symptom_sign_screening_geruch.v0] and
          OBSERVATION a_g[openEHR-EHR-OBSERVATION.symptom_sign_screening_geschmack.v0] and
          OBSERVATION a_h[openEHR-EHR-OBSERVATION.symptom_sign_screening_durchfall.v0]
        )
        where e/ehr_id/value = $ehrId
        order by a/context/start_time/value desc`;


export const aqlPatientTravel = `
        select
            a_a/data[at0001]/events[at0002]/data[at0003]/items[at0111]/value/value as Aufenthalt_in_Risikogebiet,
            a_b/items[at0046]/value/value as Standortbeschreibung,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/value as Letzte_Reise,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0008]/items[at0010]/items[at0011]/value/value as Land,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0008]/items[at0010]/items[at0012]/value/value as Bundesland,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0008]/items[at0010]/items[at0013]/value/value as Stadt,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0008]/items[at0010]/items[at0031]/value/value as Bestimmte_Region,
            a_c/data[at0001]/events[at0002]/data[at0003]/items[at0008]/items[at0019] as Rxuexckreisedatum
        from EHR e
        contains COMPOSITION a
        contains (
            OBSERVATION a_a[openEHR-EHR-OBSERVATION.travel_history.v0] and
            CLUSTER a_b[openEHR-EHR-CLUSTER.location.v1] and
            OBSERVATION a_c[openEHR-EHR-OBSERVATION.travel_event.v0]
          )
          where e/ehr_id/value = $ehrId`;
