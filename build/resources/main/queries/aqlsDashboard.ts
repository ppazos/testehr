export const aqlDashboardEhrCount = `
      SELECT count(e/ehr_id/value)
      FROM ehr e`;


export const aqlDashboardCompositionCount = `
      SELECT count(c/uid/value)
      FROM ehr e
      CONTAINS COMPOSITION c`;

export const aqlDashboardTemplates = `
      SELECT distinct c/archetype_details/template_id/value as templateId
      FROM ehr e
      CONTAINS COMPOSITION c`;

export const aqlDashboardTemplateCount = `
      SELECT count(c/uid/value)
      FROM ehr e
      CONTAINS COMPOSITION c
      where c/archetype_details/template_id/value = $templateId`;


export const aqlDashboardHealthCareFacilities = `
      SELECT distinct c/context/health_care_facility/name as healthCareFacility
      FROM ehr e
      CONTAINS COMPOSITION c`;

export const aqlDashboardHealthCareFacilityCount = `
      SELECT count(c/uid/value)
      FROM ehr e
      CONTAINS COMPOSITION c
      where c/context/health_care_facility/name = $healthCareFacility`;
