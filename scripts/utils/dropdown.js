// Sélectionne les éléments du DOM nécessaires
const dropdown = document.querySelector('#sort-options');
const dropdownList = document.querySelectorAll('.dropdown-btn');
const dropdownCaret = document.querySelector('.caret');
const selected = document.querySelector('.selected');
let selectedValue = selected.textContent;

// Fonction pour initialiser le comportement du dropdown
function initDropdown(data) {
  // Ajoute un écouteur d'événement au clic sur le bouton du dropdown
  dropdown.addEventListener('click', function(e) {
    e.preventDefault();
    // Bascule l'attribut aria-expanded pour ouvrir/fermer le dropdown
    if (dropdown.getAttribute('aria-expanded') === "false") {
      dropdown.setAttribute('aria-expanded', "true");
    } else {
      dropdown.setAttribute('aria-expanded', "false");
    }

    // Définit l'attribut aria-hidden sur les options du dropdown
    dropdownList.forEach(function(element) {
      if (element.getAttribute('aria-hidden') === "true") {
        element.setAttribute('aria-hidden', "false");
      } else {
        element.setAttribute('aria-hidden', "true");
      }
    });

    // Fait pivoter la flèche du dropdown
    dropdownCaret.classList.toggle('rotate');
  });

  // Fonction pour fermer le dropdown
  function closeDropdown() {
    // Définit l'attribut aria-expanded sur "false"
    dropdown.setAttribute('aria-expanded', "false");

    // Définit l'attribut aria-hidden sur "true" pour toutes les options du dropdown
    dropdownList.forEach(function(element) {
      element.setAttribute('aria-hidden', "true");
    });

    // Supprime la rotation de la flèche du dropdown
    dropdownCaret.classList.remove('rotate');
  }

  // Ajoute un écouteur d'événement au clic sur les options du dropdown
  dropdownList.forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();

      // Met à jour la valeur sélectionnée
      selectedValue = e.target.textContent;
      e.target.textContent = selected.textContent;
      selected.textContent = selectedValue;

      // Ferme le dropdown
      closeDropdown();

      // Détermine le critère de tri en fonction de la valeur sélectionnée
      let sortBy;
      switch (selectedValue) {
        case 'Popularité':
          sortBy = 'likes';
          break;
        case 'date':
          sortBy = 'date';
          break;
        case 'Titre':
          sortBy = 'title';
          break;
      }

      // Crée la galerie triée selon le critère choisi
      createTheGallery(data, sortBy);
    });
  });
}