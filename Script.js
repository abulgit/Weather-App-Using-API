const weatherApi = {
  key: "9399278bfd50b085a715eba7e71402d3",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather", //API
};
const searchInputBox = document.getElementById("input-box");
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather_body").style.display = "block";
  }
});
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}
function showWeatherReport(weather) {
  console.log(weather);

  let city_name = document.getElementById("city");
  city_name.innerText = `${weather.name} , ${weather.sys.country}`;

  let temp = document.getElementById("temparature");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let min_max_temp = document.getElementById("min-max");
  min_max_temp.innerHTML = `${Math.round(
    weather.main.temp_max
  )}&deg;C(max) / ${Math.round(weather.main.temp_max)}&deg;C(min)`;

  let weather_type = document.getElementById("isCloud");
  weather_type.innerHTML = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);
}
function dateManage(datearg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = datearg.getFullYear();
  let month = months[datearg.getMonth()];
  let date = datearg.getDate();
  let day = days[datearg.getDay()];

  return `${day} , ${date} ${month} , ${year}`;
}
