var key = "65122e7994f94669bc9202250222908";
var baseURL = "http://api.weatherapi.com/v1/";
function getCurrentWeather(location) {
  $.get(
    `${baseURL}forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`,
    (data) => {
      const location = data.location;
      const currentContainer = document.getElementById("current");
      const current = data.current;
      currentContainer.innerHTML += `<div id="contain">
      <div id="name">${location.name}, ${location.region}</div>
      <div id="tempf">${current.temp_f}</div>
      <img src="${current.condition.icon}" width="100px" height="100px" >
      <div class="conditions">
      <div id="condition">${current.condition.text}</div>
      <div id="date">${location.localtime}</div>
  </div>
      <div class="extras">
      <div id="humidity">Humidity: ${current.humidity}</div>
      <div id="wind">Wind: ${current.wind_mph}</div>
      <div id="cloud">Cloud: ${current.cloud}</div>
      <div id="uv">UV: ${current.uv}</div>
      <div id="percipitation">Percipitation: ${current.precip_mm}</div>
      <div id="feels">Feels Like: ${current.feelslike_f}</div>
  </div>
      </div>
      `;

      //for loop that loops through array
      for (let i = 0; i < data.forecast.forecastday.length; i++) {
        const element = data.forecast.forecastday[i];
        const elementContainer = document.getElementById("container");
        console.log(element.date);
        elementContainer.innerHTML += `
        <h3>${element.date}</h3>
        <div id="forecast">
        <img src="${element.day.condition.icon}" width="100px" height="100px">
        <div id="cond">Conditions: ${element.day.condition.text}</div>
        <div id="avgtemp">Average Temperature: ${element.day.avgtemp_f}</div>
        </div>`;
      }
    }
  ).fail(function (e) {
    alert("WTF IS A WEATHER????");
  });
}

export { getCurrentWeather };
