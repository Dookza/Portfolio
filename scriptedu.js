const openPopupButtonimage = document.getElementById('openPopup-image');
const popupimage = document.getElementById('popup-image');
const closePopupButtonimage = document.querySelector('.close-image');

openPopupButtonimage.addEventListener('click', () => {
  popupimage.style.display = 'block';
});

closePopupButtonimage.addEventListener('click', () => {
  popupimage.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
  if (event.target === popupimage) {
    popupimage.style.display = 'none';
  }
});