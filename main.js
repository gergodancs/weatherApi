// https://www.weatherapi.com
// apikey 2acf3b0415d041fca8a132314211412
// apicall for london http://api.weatherapi.com/v1/current.json?key=2acf3b0415d041fca8a132314211412&q=London&aqi=yes
// reponse
// "location": {
//     "name": "London",
//     "region": "City of London, Greater London",
//     "country": "United Kingdom",
//     "lat": 51.52,
//     "lon": -0.11,
//     "tz_id": "Europe/London",
//     "localtime_epoch": 1641480026,
//     "localtime": "2022-01-06 14:40"
// },
// "current": {
//     "last_updated_epoch": 1641479400,
//     "last_updated": "2022-01-06 14:30",
//     "temp_c": 5.0,
//     "temp_f": 41.0,
//     "is_day": 1,
//     "condition": {
//         "text": "Moderate rain",
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
//         "code": 1189

const getValuesInput = () => {
  let inp = document.getElementById("city");
  let opt = document.getElementById("selector");
  fetchData(inp.value, opt.value);
};

const fetchData = async (a, b) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=2acf3b0415d041fca8a132314211412&q=${a}&aqi=yes`;
  const res = await fetch(url);
  const data = await res.json();
  fetchedDates(data, b);
};

const fetchedDates = (d, b) => {
  let city = d.location.country + ", " + d.location.name;
  let temp = d.current.temp_c;
  let hum = d.current.humidity;
  let con = d.current.condition.text;
  let res;
  res = b === "tem" ? temp + "C" : b === "con" ? con : hum + "%";
  displayData(city, res);
};

const displayData = (city, res) => {
  //ide kell ket function, az egyik vizsgalja h van e a masik feltolti

  let empty = document.querySelector("h1");
  if (empty) {
    empty.remove();
  }
  let result = document.getElementById("rezult");
  let szoveg = document.createElement("h1");
  szoveg.innerText = city;
  result.append(szoveg);

  let emptyB = document.querySelector("h2");
  if (emptyB) {
    emptyB.remove();
  }

  let szovegB = document.createElement("h2");
  szovegB.innerText = res;
  result.append(szovegB);
};
const main = () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", getValuesInput);
  fecthSkiResort();
};

window.addEventListener("load", main);

// App ID
// 355bc5f1
// Key
// a0575c9cdb72f1b055f524e3008451ed
//192
//api.weatherunlocked.com/api/resortforecast/999001?num_of_days=3&app_id={APP_ID}&app_key={APP_KEY}
const fecthSkiResort = async () => {
  let id = "355bc5f1";
  let key = "a0575c9cdb72f1b055f524e3008451ed";
  const url = `https://api.weatherunlocked.com/api/resortforecast/192?num_of_days=3&app_id=${id}&app_key=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.forecast);

  console.log(data.forecast[0].time);
  console.log(data.forecast[0].date);
  console.log(data.forecast[0].base.wx_desc);
  console.log(data.forecast[0].upper.freshsnow_cm);
  console.log(data.forecast[0].upper.feelslike_c);
};
