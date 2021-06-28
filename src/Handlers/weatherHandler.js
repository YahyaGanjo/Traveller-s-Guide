import clearCurrentPage from "../Utils/clearCurrentPage.js";
import renderWeatherPage from "../Views/renderWeatherPage.js";

function weatherHandler(page, element, place) {
  element.addEventListener("click", () => {
    clearCurrentPage(page);
    renderWeatherPage(page, place);
  });
}
export default weatherHandler;
