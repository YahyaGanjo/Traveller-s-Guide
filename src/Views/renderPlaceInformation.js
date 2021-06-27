import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import fetchData from "../Utils/fetchData.js";

function renderPlaceInformation(countryName, place, page) {
  const title = createAndAppend(page, "h1", "title");
  title.textContent = place;
  // const countryName = response.address.countryName;
  fetchData(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      if (!response[0]) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      console.log(response);
      const result = response[0];
      const flag = createElementWithClass(page, "img", "grid-items");
      flag.src = result.flag;
      const region = createElementWithClass(page, "div", "grid-items");
      region.textContent = `Region:    ${result.subregion}`;
      const discover = createAndAppend(page, "div", "discover-card");
      const discoverImg = createElementWithClass(discover, "img", "img-card");
      discoverImg.src = "../public/discover.jpg";
      const discoverText = createElementWithClass(discover, "p", "txt-card");
      discoverText.textContent = `Discover ${countryName}`;
      const language = createElementWithClass(page, "div", "grid-items");
      language.textContent = `Language:    ${result.languages[0].name}`;
      const currency = createElementWithClass(page, "div", "grid-items");
      currency.textContent = `Currency:    ${result.currencies[0].name}`;
      if (result.currencies[0].symbol)
        currency.textContent += " / " + result.currencies[0].symbol;
      const weather = createAndAppend(page, "div", "weather-card");
      const weatherImg = createElementWithClass(weather, "img", "img-card");
      weatherImg.src = "../public/weather.jpg";
      const weatherText = createElementWithClass(weather, "p", "txt-card");
      weatherText.textContent = `Weather in ${countryName}`;
      const time = createElementWithClass(page, "div", "grid-items");
      time.textContent = `Time zone:    ${result.timezones[0]}`;
      const wiki = createAndAppend(page, "a", "wiki");
      wiki.target = "_blank";
      wiki.href = `https://en.wikipedia.org/wiki/${countryName}`;
      wiki.textContent = `${countryName}/Wiki`;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
export default renderPlaceInformation;