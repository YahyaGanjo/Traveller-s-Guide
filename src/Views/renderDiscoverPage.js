"use strict";
import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import airports from "../Listeners/airports.js";
import hotels from "../Listeners/hotels.js";
import restaurants from "../Listeners/restaurants.js";
import shoppings from "../Listeners/shoppings.js";

function renderDiscoverPage(page, lat, lng) {
  page.id = "discover-page-container";
  const div = createAndAppend(page, "div", "tab");
  createElementWithClass(page, "div", "tab-content");
  createElementWithClass(page, "div", "tab-content");
  const airport = createElementWithClass(div, "button", "tab-links");
  airport.textContent = "Airports";
  airports(page, airport, lat, lng);
  const hotel = createElementWithClass(div, "button", "tab-links");
  hotel.textContent = "Hotels";
  hotels(page, hotel, lat, lng);
  const restaurant = createElementWithClass(div, "button", "tab-links");
  restaurant.textContent = "Restaurants";
  restaurants(page, restaurant, lat, lng);
  const shopping = createElementWithClass(div, "button", "tab-links");
  shopping.textContent = "Shopping";
  shoppings(page, shopping, lat, lng);
}
export default renderDiscoverPage;
