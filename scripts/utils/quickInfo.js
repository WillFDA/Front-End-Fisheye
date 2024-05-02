// Sélectionne les éléments du DOM correspondants
const totalLikesSpan = document.querySelector('.total-likes'); // L'élément pour afficher le total des likes
const dailyPricesSpan = document.querySelector('.tarif-price'); // L'élément pour afficher le prix journalier

// Fonction pour initialiser les informations rapides
function initQuickInfo(data) {
  // Met à jour le contenu textuel de l'élément dailyPricesSpan avec le prix journalier du photographe
  dailyPricesSpan.textContent = data.photographers.price + '€ / jour';

  // Calcule le total des likes pour toutes les médias
  // en utilisant la méthode reduce() sur le tableau data.media
  // acc est l'accumulateur qui stocke le total en cours
  // curr est l'élément courant du tableau (objet média)
  // acc + curr.likes ajoute les likes de l'élément courant au total en cours
  // 0 est la valeur initiale de l'accumulateur
  totalLikesSpan.textContent = data.media.reduce((acc, curr) => acc + curr.likes, 0);
}