import loadPage from './pageLoader.js';
import { homeLoader } from './home.js';
import loadMenu from './menuLoader.js';
import './style.css';

loadPage();
homeLoader();

const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');

homeButton.addEventListener('click', () => {
  homeLoader();
});

menuButton.addEventListener('click', () => {
  loadMenu();
});
