import createAndAppend from "../Utils/createAndAppend.js";

function renderHomepage() {
  const appContainer = document.getElementById("app-container");
  const homepageContainer = createAndAppend(
    appContainer,
    "div",
    "homepage-container"
  );
  const welcome = createAndAppend(homepageContainer, "h1", "welcome");
  welcome.innerHTML =
    "Travellers Guide App<br>search your destination: country, city, town ..";
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
  image.src = "public/travellers.png";
  const copy = createAndAppend(homepageContainer, "div", "footer");
  copy.innerHTML = "Made with love by Yahya &copy; HYF 2021";
}
export default renderHomepage;
