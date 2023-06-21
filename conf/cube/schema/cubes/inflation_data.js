cube("inflation_data", {
  sql_table: "public.inflation_data",

  data_source: "default",

  joins: {

  },

  dimensions: {
    inflation: {
      sql: "inflation",
      type: "string"
    },

    country_code: {
      sql: "country_code",
      type: "string"
    },

    regional_member: {
      sql: "regional_member",
      type: "string"
    },

    unit_of_measurement: {
      sql: "unit_of_measurement",
      type: "string"
    },

    subregion: {
      sql: "subregion",
      type: "string"
    },

    year: {
      sql: "year",
      type: "string"
    }
  },

  measures: {
    count: {
      type: "count"
    },
    sum: {
      sql: "inflation",
      type: "sum"
    },
    avg: {
      sql: "inflation",
      type: "avg"
    }
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
