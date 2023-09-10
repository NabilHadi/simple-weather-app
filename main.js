console.log("hello world!");
const outputContainerDiv = document.getElementById("output_container");
const countryNameDiv = document.getElementById("country_name");
const cityNameDiv = document.getElementById("city_name_output");
const regionDiv = document.getElementById("region");
const conditionDiv = document.getElementById("condition");
const conditionIconImg = document.getElementById("conditionIcon");
const tempDiv = document.getElementById("temp");

const weatherForm = document.getElementById("weather_form");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = document.getElementById("city_name").value;

  const key = "24ba3d4e7216493d965120545231009";
  const response = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputValue}&aqi=no`
  );
  response
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((jsonData) => {
      const country = jsonData.location.country;
      const cityName = jsonData.location.name;
      const region = jsonData.location.region;
      const conditionText = jsonData.current.condition.text;
      const conditionIconUrl = jsonData.current.condition.icon;
      const temp = jsonData.current.temp_c;

      countryNameDiv.textContent = country;
      cityNameDiv.textContent = cityName;
      regionDiv.textContent = region;
      conditionDiv.textContent = conditionText;
      conditionIconImg.src = conditionIconUrl;
      tempDiv.textContent = temp + "C";

      outputContainerDiv.classList.remove("hide");
    });
});
