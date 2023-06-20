cube("pokemons", {
    sql: "SELECT * FROM public.pokemons",

    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    },

    joins: {
    },

    measures: {

      count: {
        type: "count"
      },

      hp: {
        sql: "hp",
        title: "hp [SUM]",
        type: "sum"
      },

      hp_avg: {
        sql: "hp",
        title: "hp [AVG]",
        type: "avg"
      },

      hp_min: {
        sql: "hp",
        title: "hp [MIN]",
        type: "min"
      },

      hp_max: {
        sql: "hp",
        title: "hp [MAX]",
        type: "max"
      },

      attack: {
        sql: "attack",
        title: "attack [SUM]",
        type: "sum"
      },

      attack_avg: {
        sql: "attack",
        title: "attack [AVG]",
        type: "avg"
      },

      attack_min: {
        sql: "attack",
        title: "attack [MIN]",
        type: "min"
      },

      attack_max: {
        sql: "attack",
        title: "attack [MAX]",
        type: "max"
      },

      speed: {
        sql: "speed",
        title: "speed [SUM]",
        type: "sum"
      },

      speed_avg: {
        sql: "speed",
        title: "speed [AVG]",
        type: "avg"
      },

      speed_min: {
        sql: "speed",
        title: "speed [MIN]",
        type: "min"
      },

      speed_max: {
        sql: "speed",
        title: "speed [MAX]",
        type: "max"
      },

      special_attack: {
        sql: "special-attack",
        title: "Sp. Attack [SUM]",
        type: "sum"
      },

      special_attack_avg: {
        sql: "special-attack",
        title: "Sp. Attack [AVG]",
        type: "avg"
      },

      special_attack_min: {
        sql: "special-attack",
        title: "Sp. Attack [MIN]",
        type: "min"
      },

      special_attack_max: {
        sql: "special-attack",
        title: "Sp. Attack [MAX]",
        type: "max"
      },

      special_defense: {
        sql: "special-defense",
        title: "Sp. Def [SUM]",
        type: "sum"
      },

      special_defense_avg: {
        sql: "special-defense",
        title: "Sp. Def [AVG]",
        type: "avg"
      },

      special_defense_min: {
        sql: "special-defense",
        title: "Sp. Def [MIN]",
        type: "min"
      },

      special_defense_max: {
        sql: "special-defense",
        title: "Sp. Def [MAX]",
        type: "max"
      },

      height: {
        sql: "height",
        title: "height [SUM]",
        type: "sum"
      },

      height_avg: {
        sql: "height",
        title: "height [AVG]",
        type: "avg"
      },

      height_min: {
        sql: "height",
        title: "height [MIN]",
        type: "min"
      },

      height_max: {
        sql: "height",
        title: "height [MAX]",
        type: "max"
      },

      weight: {
        sql: "weight",
        title: "weight [SUM]",
        type: "sum"
      },

      weight_avg: {
        sql: "weight",
        title: "weight [AVG]",
        type: "avg"
      },

      weight_min: {
        sql: "weight",
        title: "weight [MIN]",
        type: "min"
      },

      weight_max: {
        sql: "weight",
        title: "weight [MAX]",
        type: "max"
      },

      base_experience: {
        sql: "base_experience",
        title: "base XP [SUM]",
        type: "sum"
      },

      base_experience_avg: {
        sql: "base_experience",
        title: "base XP [AVG]",
        type: "avg"
      },

      base_experience_min: {
        sql: "base_experience",
        title: "base XP [MIN]",
        type: "min"
      },

      base_experience_max: {
        sql: "base_experience",
        title: "base XP [MAX]",
        type: "max"
      },

    },

    dimensions: {

      name: {
        sql: "name",
        title: "name",
        type: "string"
      },

      Order: {
        sql: "Order",
        title: "Date",
        type: "number"
      }

    },

    dataSource: "default"
  });
