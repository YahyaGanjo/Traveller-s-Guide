import createAndAppend from "../Utils/createAndAppend.js";

function createMap(page, lat, lng) {
  createAndAppend(page, "div", "map");
  const here = {
    apiKey: "j1FYuaIJtBD1DwGX-x5MXWquiUc2fjPZlbBCMoNz5Oc",
  };
  const style = "normal.day";

  const hereTileUrl = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/256/png8?apiKey=${here.apiKey}&ppi=320`;

  const map = L.map("map", {
    center: [lat, lng],
    zoom: 7,
    layers: [L.tileLayer(hereTileUrl)],
  });
  map.attributionControl.addAttribution("&copy; HERE 2019");
}
export default createMap;
