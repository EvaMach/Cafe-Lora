import './style.css';

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
const orderBtn = document.querySelector('.order-btn');
let ordered = false;

orderBtn.addEventListener('click', () => {
  ordered = ordered === false ? true : false;
  if (ordered) {
    orderBtn.textContent = 'Zrušit';
  } else {
    orderBtn.textContent = 'Objednat';
  }
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
});
