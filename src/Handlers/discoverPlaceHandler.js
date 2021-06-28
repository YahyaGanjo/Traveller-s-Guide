import clearCurrentPage from "../Utils/clearCurrentPage.js";
import renderDiscoverPage from "../Views/renderDiscoverPage.js";

function discoverPlaceHandler(page, discover, place) {
  const lat = place.position[0];
  const lng = place.position[1];
  discover.addEventListener("click", () => {
    clearCurrentPage(page);
    renderDiscoverPage(page, lat, lng);
  });
}
export default discoverPlaceHandler;
