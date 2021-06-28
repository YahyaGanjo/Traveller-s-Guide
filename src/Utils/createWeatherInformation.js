import createAndAppend from "./createAndAppend.js";

function createWeatherInformation(element, data) {
  const date = createAndAppend(element, "h4");
  date.textContent = `${data.date}`;
  const temperature = createAndAppend(element, "h2");
  temperature.textContent = `${data.day.avgtemp_c} °c`;
  const icon = createAndAppend(element, "img");
  icon.src = data.day.condition.icon;
  const minmax = createAndAppend(element, "p");
  minmax.textContent = `${data.day.mintemp_c}/${data.day.maxtemp_c} °c`;
  const conditionText = createAndAppend(element, "p");
  conditionText.textContent = `${data.day.condition.text}`;
  const wind = createAndAppend(element, "p");
  wind.textContent = `wind: ${data.day.maxwind_kph} kph`;
}
export default createWeatherInformation;
