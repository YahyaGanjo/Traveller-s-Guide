import clearCurrentPage from "../Utils/clearCurrentPage.js";
import createAndAppend from "../Utils/createAndAppend.js";
import fetchData from "../Utils/fetchData.js";

function discoverPlaceHandler(page, discover, place) {
  discover.addEventListener("click", () => {
    clearCurrentPage(page);
  });
}
export default discoverPlaceHandler;
