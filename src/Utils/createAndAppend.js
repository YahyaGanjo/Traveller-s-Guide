function createAndAppend(parent, element, id) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  if (id) newElement.id = id;
  return newElement;
}
export default createAndAppend;
