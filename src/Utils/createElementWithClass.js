function createElementWithClass(parent, element, className) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);
  return newElement;
}
export default createElementWithClass;
