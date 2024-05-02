// Sélectionne les éléments du DOM nécessaires
const dropdown = document.querySelector('#sort-options')
const dropdownContent = document.querySelector('.dropdown-content')
const dropdownList = document.querySelectorAll('.dropdown-content > li')
const dropdownCaret = document.querySelector('.caret')
const selected = document.querySelector('.selected')
let selectedValue = selected.textContent

// Fonction pour initialiser le comportement du dropdown
function initDropdown(data) {
  // Ajoute un écouteur d'événement au clic sur le bouton du dropdown
  dropdown.addEventListener('click', function (e) {
    // Bascule l'attribut aria-expanded pour ouvrir/fermer le dropdown
    if (dropdown.getAttribute('aria-expanded') === "false") {
      dropdown.setAttribute('aria-expanded', "true")
    } else {
      dropdown.setAttribute('aria-expanded', "false")
    }
    // Ajoute/supprime la classe 'inactive' sur les options du dropdown
    dropdownList.forEach(function (element) {
      element.classList.toggle('inactive')
    })
    // Fait pivoter la flèche du dropdown
    dropdownCaret.classList.toggle('rotate')
  })

  // Fonction pour fermer le dropdown
  function closeDropdown() {
    // Définit l'attribut aria-expanded sur "false"
    dropdown.setAttribute('aria-expanded', "false")
    // Ajoute la classe 'inactive' à toutes les options du dropdown
    dropdownList.forEach(function (element) {
      element.classList.add('inactive')
    })
    // Supprime la rotation de la flèche du dropdown
    dropdownCaret.classList.remove('rotate')
  }

  // Ajoute un écouteur d'événement au clic sur les options du dropdown
  dropdownList.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault()
      // Met à jour la valeur sélectionnée
      selectedValue = e.target.textContent
      e.target.textContent = selected.textContent
      selected.textContent = selectedValue
      // Ferme le dropdown
      closeDropdown()
      // Détermine le critère de tri en fonction de la valeur sélectionnée
      let sortBy;
      switch (selectedValue) {
        case 'Popularité':
          sortBy = 'likes'
          break;
        case 'date':
          sortBy = 'date'
          break;
        case 'Titre':
          sortBy = 'title'
          break;
      }
      // Crée la galerie triée selon le critère choisi
      createTheGallery(data, sortBy)
    })
  })
}