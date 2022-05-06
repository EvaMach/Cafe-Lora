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

// 4 OBJEDNÁVÁNÍ
// const orderBtn = document.querySelector('.order-btn');
// let ordered = false;

// orderBtn.addEventListener('click', () => {
//   ordered = ordered === false ? true : false;
//   if (ordered) {
//     orderBtn.textContent = 'Zrušit';
//   } else {
//     orderBtn.textContent = 'Objednat';
//   }
//   document
//     .querySelector('.drink__cup')
//     .classList.toggle('drink__cup--selected');
// });

// 5 INGREDIENCE JAKO KOMPONENTY
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

// layers.forEach((layer) => {
//   document.querySelector('.drink__info').innerHTML += Layer(layer);
// });

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
