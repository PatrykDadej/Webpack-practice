function createHeader(title) {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('headerDiv');
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = title;
  headerDiv.appendChild(mainHeader);

  return headerDiv;
}

function createNavBar(buttonOne, buttonTwo) {
  const navDiv = document.createElement('div');
  navDiv.classList.add('navBarDiv');

  const firstButton = document.createElement('button');
  firstButton.textContent = buttonOne;
  firstButton.setAttribute('id', 'homeButton');

  const secondButton = document.createElement('button');
  secondButton.textContent = buttonTwo;
  secondButton.setAttribute('id', 'menuButton');

  navDiv.appendChild(firstButton);
  navDiv.appendChild(secondButton);

  return navDiv;
}

function createMainDiv() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('mainDiv');

  return mainDiv;
}

function loadPage() {
  const contentDivSelector = document.querySelector('.content');
  const header = createHeader('Sakura Sushi');

  contentDivSelector.appendChild(header);

  const navigationBar = createNavBar('Home', 'Our Menu');
  contentDivSelector.appendChild(navigationBar);

  const mainDiv = createMainDiv();
  contentDivSelector.appendChild(mainDiv);

  const mainDivContentArea = document.createElement('div');
  mainDivContentArea.classList.add('contentArea');
}

export default loadPage;
