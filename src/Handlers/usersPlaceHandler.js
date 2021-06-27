import renderPlacePage from "../Views/renderPlacePage.js";

function usersPlaceHandler() {
  const input = document.querySelector("input");
  const div = document.getElementById("search-container");
  div.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      const homepageContainer = document.getElementById("homepage-container");
      renderPlacePage(input.value, homepageContainer);
    }
  });
}
export default usersPlaceHandler;
