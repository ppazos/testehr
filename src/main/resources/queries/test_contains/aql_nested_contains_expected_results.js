// nested_3_levels_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_3_levels_contains.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_3_levels_contains_nocompoarchid_anyehr.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_3_levels_contains_nocompoarchid.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains_anyehr.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains_noarchid_1.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains_noarchid_2.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS CLUSTER CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains_nocompoarchid_anyehr.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_4_levels_contains_nocompoarchid.json

// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

// nested_5_levels_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}


//nested_5_levels_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_5_levels_contains_noarchid_1.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_5_levels_contains_noarchid_2.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_5_levels_contains_noarchid_3.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_5_levels_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_5_levels_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_noarchid_1.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_noarchid_2.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_noarchid_3.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_noarchid_4.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_6_levels_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS SECTION [openEHR-EHR-SECTION.nested.v1] CONTAINS INSTRUCTION [openEHR-EHR-INSTRUCTION.nested.v1] CONTAINS ITEM_TREE [openEHR-EHR-ITEM_TREE.nested.v1] CONTAINS CLUSTER [openEHR-EHR-CLUSTER.nested.v1] CONTAINS CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and3_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] AND CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and3_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] AND CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and3_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] AND CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and3_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] AND CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_and_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_p_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1])) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_p_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1])) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_p_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1])) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or2_and_p_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] AND CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1])) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or3_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or3_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or3_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or3_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS (SECTION s[openEHR-EHR-SECTION.nested.v1] OR CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or_contains_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or_contains.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.nesting.v1] CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or_contains_nocompoarchid_anyehr.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e CONTAINS COMPOSITION c CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}

//nested_or_contains_nocompoarchid.json
//
// c/uid/value : String
// cluster2/items[at0002]/value : DV_COUNT

{
    "q": "SELECT c/uid/value, cluster2/items[at0002]/value FROM EHR e[ehr_id/value=$ehr_id] CONTAINS COMPOSITION c CONTAINS (CLUSTER cluster2[openEHR-EHR-CLUSTER.nested2.v1] OR CLUSTER cluster[openEHR-EHR-CLUSTER.nested.v1]) WHERE cluster2/items[at0002]/value/magnitude > 5",
    "columns": [
        {
            "name": "#0",
            "path": "/uid/value"
        },
        {
            "name": "#1",
            "path": "/items[at0002]/value"
        }
    ],
    "rows": [

    ]
}
