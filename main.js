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
  let varos = inp.value;

  //   let select = document.getElementsById("selector");
  //   let selected = select.value;

  fetchData(varos);
};
//kell ures valtozo aminek az input ad értéket minden alkalomal

const getValuesSelect = () => {};

const fetchData = async (a) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=2acf3b0415d041fca8a132314211412&q=${a}&aqi=yes`;
  const res = await fetch(url);
  const data = await res.json();
  fetchedDates(data);

  //displayData()
};

const fetchedDates = (data) => {
  let temperature = data.current.temp_c;
  let humidity = data.current.humidity;
  let conditions = data.current.condition.text;
  let city = data.location.country + ", " + data.location.name;
  displayData(temperature);
  console.log(temperature);
};

const displayData = (res) => {
  let empty = document.querySelector("h1");
  if (empty) {
    empty.remove();
  }
  let result = document.getElementById("rezult");
  let szoveg = document.createElement("h1");

  szoveg.innerText = res;
  result.append(szoveg);
};
//a result div-be jeleniti meg a kapot adatokat

const main = () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", getValuesInput);
};

window.addEventListener("load", main);

// az input value-kat a button addeventlisner-jével átt kell adni a fetchdatanak
