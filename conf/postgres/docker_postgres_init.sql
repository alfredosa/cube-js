CREATE TABLE inflation_data (
  regional_member VARCHAR,
  year VARCHAR,
  inflation NUMERIC,
  unit_of_measurement VARCHAR,
  subregion VARCHAR,
  country_code VARCHAR
);


COPY inflation_data
FROM '/dataset/inflation.csv'
DELIMITER ','
CSV HEADER;
