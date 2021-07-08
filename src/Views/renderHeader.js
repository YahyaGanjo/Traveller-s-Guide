import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import homeButton from "../Listeners/homeButton.js";

function renderHeader() {
  const appContainer = createAndAppend(document.body, "div", "app-container");
  const header = createAndAppend(appContainer, "div", "header");
  const logo = createAndAppend(header, "img", "logo");
  logo.src = "public/logo_1.jpg";
  const navbar = createAndAppend(header, "div", "navbar");
  const home = createElementWithClass(navbar, "button", "nav-btn");
  home.textContent = "Home";
  homeButton(home);
}
export default renderHeader;
