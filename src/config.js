const local = {
    open_weather_key: process.env.OPEN_WEATHER_KEY
  };
  
  const prod = {
    open_weather_key: process.env.OPEN_WEATHER_KEY,
  };
  
  const config = process.env.REACT_APP_STAGE === "production" ? prod : local;
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
  };