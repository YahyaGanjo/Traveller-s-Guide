import clearCurrentPage from "../Utils/clearCurrentPage.js";
import fetchData from "../Utils/fetchData.js";
import notFound from "../Views/notFound.js";
import renderPlaceInformation from "../Views/renderPlaceInformation.js";

function renderPlacePage(usersInput, page) {
  clearCurrentPage(page);
  page.id = "place-page-container";
  fetchData(
    `https://geocode.search.hereapi.com/v1/geocode?q=${usersInput}&lang=en-US&apiKey=j1FYuaIJtBD1DwGX-x5MXWquiUc2fjPZlbBCMoNz5Oc`
  )
    .then((response) => {
      if (response.items.length === 0) {
        notFound(usersInput, page);
      } else {
        if (
          response.items[0].resultType === "locality" ||
          response.items[0].resultType === "administrativeArea"
        ) {
          const placeObject = {
            place: response.items[0].address.label,
            abstracted: response.items[0].title.split(",")[0],
            country: response.items[0].address.countryName,
            position: [
              response.items[0].position.lat,
              response.items[0].position.lng,
            ],
          };
          renderPlaceInformation(page, placeObject);
        } else {
          notFound(usersInput, page);
        }
      }
    })
    .catch((err) => console.log(err.message));
}
export default renderPlacePage;
