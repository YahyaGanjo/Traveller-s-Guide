import renderHeader from "../Views/renderHeader.js";
import renderHomepage from "../Views/renderHomepage.js";
import usersPlace from "../Listeners/usersPlace.js";

function main() {
  renderHeader();
  renderHomepage();
  usersPlace();
}
window.addEventListener("load", main);
