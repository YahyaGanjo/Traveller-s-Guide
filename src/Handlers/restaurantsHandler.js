import showRestaurants from "../Views/showRestaurants.js";

function restaurantsHandler(page, restaurant, lat, lng) {
  restaurant.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showRestaurants(page, lat, lng);
  });
}
export default restaurantsHandler;
