import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, image, layers } = props;
  let { ordered } = props;

  const drink = document.createElement('div');
  drink.classList.add('drink');
  drink.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}" />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;

  // layers in the props - no need for data here
  // inserting some more innerHTML into innerHTML - selecting from the div directly and adding where needed
  layers.forEach((layer) => {
    drink.querySelector('.drink__info').innerHTML += Layer(layer);
  });

  const orderBtn = drink.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
    ordered = ordered === false ? true : false;
    if (ordered) {
      orderBtn.textContent = 'Zrušit';
    } else {
      orderBtn.textContent = 'Objednat';
    }
    drink.querySelector('.drink__cup').classList.toggle('drink__cup--selected');
  });

  return drink;
};
