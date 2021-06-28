"use strict";
import showAirports from "../Views/showAirports.js";
import showHotels from "../Views/showHotels.js";
import showRestaurants from "../Views/showRestaurants.js";
import showShopping from "../Views/showShopping.js";
import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";

function renderDiscoverPage(page, lat, lng) {
  page.id = "discover-page-container";
  const div = createAndAppend(page, "div", "tab");
  createElementWithClass(page, "div", "tab-content");
  createElementWithClass(page, "div", "tab-content");
  const airports = createElementWithClass(div, "button", "tab-links");
  airports.textContent = "Airports";
  airports.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showAirports(page, lat, lng);
  });
  const hotels = createElementWithClass(div, "button", "tab-links");
  hotels.textContent = "Hotels";
  hotels.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showHotels(page, lat, lng);
  });
  const restaurants = createElementWithClass(div, "button", "tab-links");
  restaurants.textContent = "Restaurants";
  restaurants.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showRestaurants(page, lat, lng);
  });
  const shopping = createElementWithClass(div, "button", "tab-links");
  shopping.textContent = "Shopping";
  shopping.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showShopping(page, lat, lng);
  });
}
export default renderDiscoverPage;
