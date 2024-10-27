const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.querySelector('.close');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});