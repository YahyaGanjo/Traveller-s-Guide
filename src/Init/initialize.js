import renderHeader from "../Views/renderHeader.js";
import renderHomepage from "../Views/renderHomepage.js";

function main() {
  renderHeader();
  renderHomepage();
}
window.addEventListener("load", main);
