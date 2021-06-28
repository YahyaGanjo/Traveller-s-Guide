import clearCurrentPage from "../Utils/clearCurrentPage.js";
import createAndAppend from "../Utils/createAndAppend.js";
import fetchData from "../Utils/fetchData.js";

function discoverPlaceHandler(page, discover, place) {
  discover.addEventListener("click", () => {
    clearCurrentPage(page);
    console.log(place);
    /* fetchData(
      "https://discover.search.hereapi.com/v1/discover?at=40.7307999,-73.9973085&limit=2&q=Statue+of+liberty&apiKey=j1FYuaIJtBD1DwGX-x5MXWquiUc2fjPZlbBCMoNz5Oc"
    ).then((response) => console.log(place, response));
    */
  });
}
export default discoverPlaceHandler;
