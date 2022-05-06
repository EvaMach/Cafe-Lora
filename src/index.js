import './style.css';
import { Drink } from '../src/Drink/index.js';

// 3 ZPROVOZNĚNÍ NAVIGACE
const navigation = document.querySelector('nav');
document.querySelector('#nav-btn').addEventListener('click', () => {
  navigation.classList.toggle('nav-closed');
});

document.querySelectorAll('nav > a').forEach((a) => {
  a.addEventListener('click', () => {
    navigation.classList.add('nav-closed');
  });
});

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((drink) => {
      document.querySelector('.drinks-list').appendChild(Drink(drink));
    });
  });
