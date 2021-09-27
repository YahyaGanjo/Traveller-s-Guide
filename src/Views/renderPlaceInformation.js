import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import fetchData from "../Utils/fetchData.js";
import createMap from "../Utils/createMap.js";
import discoverPlace from "../Listeners/discoverPlace.js";
import weather from "../Listeners/weather.js";

function renderPlaceInformation(page, placeObject) {
  const title = createAndAppend(page, "h1", "title");
  title.textContent = placeObject.place;
  fetchData(`https://restcountries.com/v3/name/${placeObject.country}`)
    .then((response) => {
      if (!response[0]) {
        throw Error(response.statusText);
      }
      const result = response[0];
      const flag = createElementWithClass(page, "img", "grid-items");
      flag.src = result.flags[1];
      flag.id = "flag";
      const region = createElementWithClass(page, "div", "grid-items");
      region.textContent = `Region:    ${result.subregion}`;
      const discover = createAndAppend(page, "div", "discover-card");
      const discoverImg = createElementWithClass(discover, "img", "img-card");
      discoverImg.src = "public/discover.jpg";
      const discoverText = createElementWithClass(discover, "p", "txt-card");
      discoverText.textContent = `Discover ${placeObject.abstracted}`;
      discoverPlace(page, discover, placeObject);
      const language = createElementWithClass(page, "div", "grid-items");
      language.textContent = `Language:    ${
        result.languages[Object.keys(result.languages)[0]]
      }`;
      const currency = createElementWithClass(page, "div", "grid-items");
      currency.textContent = `Currency:    ${
        result.currencies[Object.keys(result.currencies)[0]].name
      }`;
      currency.textContent +=
        " / " + result.currencies[Object.keys(result.currencies)[0]].symbol;
      const weatherContainer = createAndAppend(page, "div", "weather-card");
      const weatherImg = createElementWithClass(
        weatherContainer,
        "img",
        "img-card"
      );
      weatherImg.src = "public/weather.jpg";
      const weatherText = createElementWithClass(
        weatherContainer,
        "p",
        "txt-card"
      );
      weatherText.textContent = `Weather in ${placeObject.abstracted}`;
      weather(page, weatherContainer, placeObject);
      const wiki = createAndAppend(page, "a", "wiki");
      wiki.target = "_blank";
      wiki.href = `https://en.wikipedia.org/wiki/${placeObject.country}`;
      wiki.textContent = `${placeObject.country}/Wiki`;
      const area = createElementWithClass(page, "div", "grid-items");
      area.textContent = `Country's area: ${result.area}km²`;
      const lat = placeObject.position[0];
      const lng = placeObject.position[1];
      createMap(page, lat, lng);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
export default renderPlaceInformation;
