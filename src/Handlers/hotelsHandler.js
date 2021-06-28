import showHotels from "../Views/showHotels.js";

function hotelsHandler(page, hotel, lat, lng) {
  hotel.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showHotels(page, lat, lng);
  });
}
export default hotelsHandler;
