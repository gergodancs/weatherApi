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
  let option = document.getElementById("selector");
  let selected = option.value;
  fetchData(varos, selected);
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
  //   if (b === "tem") {
  //     displayData(city, temp + "C");
  //   }
  //   if (b === "con") {
  //     displayData(city, con);
  //   }
  //   if (b === "hum") {
  //     displayData(city, hum + "%");
  //   }
  displayData(city, res);
  console.log(city);
  //console.log(temperature);
};

const displayData = (city, res) => {
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
//a result div-be jeleniti meg a kapot adatokat

const main = () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", getValuesInput);
};

window.addEventListener("load", main);

// az input value-kat a button addeventlisner-jével átt kell adni a fetchdatanak
