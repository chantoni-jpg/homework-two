import * as MODEL from "./model.js";
function initListeners() {
  $("#gw").click((e) => {
    $("#current").css("visibility", "visible");
    $(".header").css("visibility", "visible");
    const location = $("#gwInput").val();
    if (location != "") {
      getWeather(location);
    } else {
      alert("You need to put in a location first!");
    }
  });

  $("#clear").click((e) => {
    $("#current").css("visibility", "hidden");
    $("#container").empty();
    document.getElementById("current").innerHTML = "";
  });
}

function getWeather(location) {
  console.log("weather " + location);
  MODEL.getCurrentWeather(location);
  $("#gwInput").val("");
}

$(document).ready(function () {
  initListeners();
});
