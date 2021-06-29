import clearCurrentPage from "../Utils/clearCurrentPage.js";
import renderWeatherPage from "../Views/renderWeatherPage.js";
import addPlaceButton from "../Utils/addPlaceButton.js";

function weatherHandler(page, element, place) {
  element.addEventListener("click", () => {
    clearCurrentPage(page);
    renderWeatherPage(page, place);
    addPlaceButton(place.abstracted);
  });
}
export default weatherHandler;
