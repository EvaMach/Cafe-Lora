import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const {
    id,
    name,
    ordered,
    image,
    layers: { color, label },
  } = props;

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

  drinkData.layers.forEach((layer) => {
    drink.querySelector('.drink__info').innerHTML += Layer(layer);
  });
  return drink;
};
