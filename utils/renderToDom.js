const renderToDom = (divID, content) => {
  const theDiv = document.querySelector(divID);
  theDiv.innerHTML = content;
};
export default renderToDom;
