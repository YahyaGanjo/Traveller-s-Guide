import showShoppings from "../Views/showShoppings.js";

function shoppingsHandler(page, shopping, lat, lng) {
  shopping.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showShoppings(page, lat, lng);
  });
}
export default shoppingsHandler;
