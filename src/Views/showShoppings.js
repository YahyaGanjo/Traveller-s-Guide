import createAndAppend from "../Utils/createAndAppend.js";
import createElementWithClass from "../Utils/createElementWithClass.js";
import fetchData from "../Utils/fetchData.js";

function showShopping(page, lat, lng) {
  fetchData(
    `https://discover.search.hereapi.com/v1/discover?at=${lat},${lng}&limit=2&lang=en-US&q=shopping&apiKey=j1FYuaIJtBD1DwGX-x5MXWquiUc2fjPZlbBCMoNz5Oc`
  )
    .then((response) => {
      response.items.forEach((item) => {
        const container = createElementWithClass(page, "div", "tab-content");
        const name = createAndAppend(container, "h3");
        name.textContent = item.title;
        if (item.categories) {
          item.categories.forEach((category) => {
            const sort = createAndAppend(container, "p");
            sort.textContent = `Category : ${category.name}`;
          });
        }
        const address = createAndAppend(container, "p");
        address.textContent = `Address : ${item.address.label}`;
        if (item.foodTypes) {
          item.foodTypes.forEach((Type) => {
            const sort = createAndAppend(container, "p");
            sort.textContent = `Food Type : ${Type.name}`;
          });
        }
        if (item.contacts) {
          if (item.contacts[0].phone) {
            const details = createAndAppend(container, "p");
            details.textContent =
              "Telephone : " + item.contacts[0].phone[0].value;
          }
          if (item.contacts[0].www) {
            const details1 = createAndAppend(container, "a");
            details1.textContent = "Website : " + item.contacts[0].www[0].value;
            details1.href = item.contacts[0].www[0].value;
            details1.target = "_blank";
          }
        }
      });
    })
    .catch(console.log);
}
export default showShopping;
