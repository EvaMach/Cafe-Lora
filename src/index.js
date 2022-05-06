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

// 5 INGREDIENCE JAKO KOMPONENTY

// 2.2 NÁPOJ JAKO KOMPONENTA

const drinkData = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

document.querySelector('.drinks-list').appendChild(Drink(drinkData));
