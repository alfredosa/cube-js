cube(`top_20_pokemon`, {
  sql_table: `public.top_20_pokemon`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
