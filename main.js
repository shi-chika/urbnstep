import './assets/scss/all.scss';

console.log('Hello world');

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.--number');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除其他按鈕的 active class
      buttons.forEach(btn => btn.classList.remove('active'));

      // 為目前點擊的按鈕加上 active class
      button.classList.add('active');
    });
  });
});