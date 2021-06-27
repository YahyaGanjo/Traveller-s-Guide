import createAndAppend from "../Utils/createAndAppend.js";

function placeNotFound(usersInput, page) {
  page.id = "not-found-container";
  const txt = createAndAppend(page, "h1");
  txt.textContent = `${usersInput} is not found`;
}
export default placeNotFound;
