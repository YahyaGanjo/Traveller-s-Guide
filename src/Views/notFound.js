import createAndAppend from "../Utils/createAndAppend.js";

function notFound(usersInput, page) {
  page.id = "not-found-container";
  const txt = createAndAppend(page, "h2");
  txt.textContent = `${usersInput} not found`;
}
export default notFound;
