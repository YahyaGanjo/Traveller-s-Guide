import renderPlacePage from "../Views/renderPlacePage.js";
import createElementWithClass from "./createElementWithClass.js";

function addPlaceButton(place) {
  const navbar = document.getElementById("navbar");
  const placeButton = createElementWithClass(navbar, "button", "nav-btn");
  placeButton.textContent = place;
  placeButton.addEventListener("click", () => {
    const appContainer = document.getElementById("app-container");
    const container = appContainer.getElementsByTagName("div")[2];
    placeButton.remove();
    renderPlacePage(place, container);
  });
}
export default addPlaceButton;
