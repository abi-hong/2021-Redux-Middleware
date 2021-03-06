import axios from "axios";

const API_KEY = "ab41980c0047292655e874cff7655a36";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchweather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
