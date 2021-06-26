import createAndAppend from "../Utils/createAndAppend.js";

function renderHomepage() {
  const appContainer = document.getElementById("app-container");
  const homepageContainer = createAndAppend(
    appContainer,
    "div",
    "homepage-container"
  );
  const welcome = createAndAppend(homepageContainer, "p", "welcome");
  welcome.textContent = "It is vacation time, search your destination";
  const searchContainer = createAndAppend(
    homepageContainer,
    "div",
    "search-container"
  );
  const searchInput = createAndAppend(searchContainer, "input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  createAndAppend(searchContainer, "div", "search-search");
  const image = createAndAppend(homepageContainer, "img", "homepage-image");
  image.src = "../../public/travellers.png";
}
export default renderHomepage;
