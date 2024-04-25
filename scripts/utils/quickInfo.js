const totalLikesSpan = document.querySelector('.total-likes');
const dailyPricesSpan = document.querySelector('.tarif-price');

function initQuickInfo(data) {
  dailyPricesSpan.textContent = data.photographers.price + '€ / jour';
  totalLikesSpan.textContent = data.media.reduce((acc, curr) => acc + curr.likes, 0);
  
}