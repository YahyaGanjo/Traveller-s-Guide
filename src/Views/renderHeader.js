import createAndAppend from "../Utils/createAndAppend.js";

function renderHeader() {
  const appContainer = createAndAppend(document.body, "div", "app-container");
  const header = createAndAppend(appContainer, "div", "header");
  const logo = createAndAppend(header, "img", "logo");
  logo.src =
    "https://github.com/YahyaGanjo/Traveller-s-Guide/blob/main/public/logo.png";
}
export default renderHeader;
