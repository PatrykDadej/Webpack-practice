import { createHeader } from './home.js';

function createMenuPosition(name, description, pictureURL, price) {
  const dishDiv = document.createElement('div');
  dishDiv.classList.add('dishDiv');

  const dishHeader = document.createElement('h2');
  dishHeader.classList.add('dishHeader');
  dishHeader.textContent = name;
  dishDiv.appendChild(dishHeader);

  const dishPicture = document.createElement('img');
  dishPicture.setAttribute('src', pictureURL);
  dishDiv.appendChild(dishPicture);

  const dishDescription = document.createElement('p');
  dishDescription.classList.add('dishDescription');
  dishDescription.textContent = description;
  dishDiv.appendChild(dishDescription);

  const dishPrice = document.createElement('p');
  dishPrice.classList.add('dishPrice');
  dishPrice.textContent = price;
  dishDiv.appendChild(dishPrice);

  return dishDiv;
}

function addMenuPositions() {
  const allDishesDiv = document.createElement('div');
  const dish1 = createMenuPosition(
    'California Roll',
    'American Style Sushi with Salmon and Avocado',
    'https://img.freepik.com/free-photo/closeup-shot-sushi-roll-black-stone-plate_181624-22537.jpg?w=1060&t=st=1677444667~exp=1677445267~hmac=7eabbec972fd3a7940e3ee209b94c2ea101dbadff3bccdf0432deb8225a3630e',
    '£9.99',
  );
  const dish2 = createMenuPosition(
    'Nigiri',
    'Slice of Fish on Rice',
    'https://img.freepik.com/free-photo/nigiri-sushi-set-with-salmon-tuna-shrimp-prawn-eel-shell_74190-6215.jpg?w=1480&t=st=1677446683~exp=1677447283~hmac=cfe82f0af7492371a26371102ee40838bfb506c71f81ece43f78d7417b6878bd',
    '3.99',
  );
  const dish3 = createMenuPosition(
    'Futomaki',
    'Tuna, Cucumber, Surimi, Omlette Wrapped with Nori Sheet',
    'https://img.freepik.com/free-photo/close-up-futomaki-with-chopsticks_1147-20.jpg?w=900&t=st=1677446888~exp=1677447488~hmac=41d332de3935ca50cf475d2c8d98b8832656a630a66e15495818f9edff53ca36',
    '12.99',
  );
  allDishesDiv.appendChild(dish1);
  allDishesDiv.appendChild(dish2);
  allDishesDiv.appendChild(dish3);

  return allDishesDiv;
}

function loadMenu() {
  const mainDiv = document.querySelector('.mainDiv');
  if (document.querySelector('.contentArea')) {
    mainDiv.removeChild(document.querySelector('.contentArea'));
  }
  const mainDivContentArea = document.createElement('div');
  mainDivContentArea.classList.add('contentArea');
  const header = createHeader('Our Menu');
  mainDivContentArea.append(header);
  const menuContent = addMenuPositions();
  mainDivContentArea.appendChild(menuContent);
  mainDiv.appendChild(mainDivContentArea);
}

export default loadMenu;
