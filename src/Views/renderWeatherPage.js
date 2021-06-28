import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import fetchData from "../Utils/fetchData.js";
import createWeatherInformation from "../Utils/createWeatherInformation.js";

function renderWeatherPage(page, place) {
  page.id = "weather-page-container";
  const lat = place.position[0];
  const lng = place.position[1];
  fetchData(
    `http://api.weatherapi.com/v1/forecast.json?key=edd7b783b54148fea28222124211506&q=${lat},${lng}&days=3`
  )
    .then((response) => {
      const title = createAndAppend(page, "h2", "place");
      title.textContent = place.place;
      const today = createElementWithClass(page, "div", "weather-element");
      const tomorrow = createElementWithClass(page, "div", "weather-element");
      const afterTomorrow = createElementWithClass(
        page,
        "div",
        "weather-element"
      );
      const date = createAndAppend(today, "h4");
      date.textContent = `Today ${response.location.localtime}`;
      const currentTemperature = createAndAppend(today, "h2");
      currentTemperature.textContent = `${response.current.temp_c} °c`;
      const icon = createAndAppend(today, "img");
      icon.src = response.current.condition.icon;
      const feelsLike = createAndAppend(today, "p");
      feelsLike.textContent = `feels like ${response.current.feelslike_c}`;
      const conditionText = createAndAppend(today, "p");
      conditionText.textContent = `${response.current.condition.text}`;
      const wind = createAndAppend(today, "p");
      wind.textContent = `wind: ${response.current.wind_kph} kph`;
      const tomorrow1 = response.forecast.forecastday[1];
      const afterTomorrow1 = response.forecast.forecastday[2];
      createWeatherInformation(tomorrow, tomorrow1);
      createWeatherInformation(afterTomorrow, afterTomorrow1);
    })
    .catch(console.log);
}
export default renderWeatherPage;
