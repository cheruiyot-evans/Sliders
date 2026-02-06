function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`There was an error in finding the '${selection}'`);
}

export default getElement;
