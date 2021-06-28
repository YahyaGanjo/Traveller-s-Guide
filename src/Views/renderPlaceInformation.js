import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import fetchData from "../Utils/fetchData.js";
import createMap from "../Utils/createMap.js";
import discoverPlace from "../listeners/discoverPlace.js";

function renderPlaceInformation(page, placeObject) {
  const title = createAndAppend(page, "h1", "title");
  title.textContent = placeObject.place;
  fetchData(`https://restcountries.eu/rest/v2/name/${placeObject.country}`)
    .then((response) => {
      if (!response[0]) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      const result = response[0];
      const flag = createElementWithClass(page, "img", "grid-items");
      flag.src = result.flag;
      flag.id = "flag";
      const region = createElementWithClass(page, "div", "grid-items");
      region.textContent = `Region:    ${result.subregion}`;
      const discover = createAndAppend(page, "div", "discover-card");
      const discoverImg = createElementWithClass(discover, "img", "img-card");
      discoverImg.src = "../public/discover.jpg";
      const discoverText = createElementWithClass(discover, "p", "txt-card");
      discoverText.textContent = `Discover ${placeObject.place}`;
      discoverPlace(page, discover, placeObject);
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
      weatherText.textContent = `Weather in ${placeObject.country}`;
      const wiki = createAndAppend(page, "a", "wiki");
      wiki.target = "_blank";
      wiki.href = `https://en.wikipedia.org/wiki/${placeObject.country}`;
      wiki.textContent = `${placeObject.country}/Wiki`;
      const time = createElementWithClass(page, "div", "grid-items");
      time.textContent = `Time zone:    ${result.timezones[0]}`;
      const lat = placeObject.position[0];
      const lng = placeObject.position[1];
      createMap(page, lat, lng);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
export default renderPlaceInformation;
