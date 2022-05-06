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
