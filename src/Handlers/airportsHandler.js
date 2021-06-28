import showAirports from "../Views/showAirports.js";

function airportsHandler(page, airport, lat, lng) {
  airport.addEventListener("click", () => {
    const content = document.querySelectorAll(".tab-content");
    content.forEach((div) => div.remove());
    showAirports(page, lat, lng);
  });
}
export default airportsHandler;
