console.log("hello world!");

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

      console.log({
        country,
        cityName,
        region,
        conditionText,
        conditionIconUrl,
        temp,
      });
    });
});
