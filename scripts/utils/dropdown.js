const dropdown = document.querySelector('#sort-options')
const dropdownContent = document.querySelector('.dropdown-content')
const dropdownList = document.querySelectorAll('.dropdown-content > li')
const dropdownCaret = document.querySelector('.caret')
const selected = document.querySelector('.selected')
let selectedValue = selected.textContent

function initDropdown(data) {
  dropdown.addEventListener('click', function (e) {
    if (dropdown.getAttribute('aria-expanded') === "false") {
      dropdown.setAttribute('aria-expanded', "true")
    } else {
      dropdown.setAttribute('aria-expanded', "false")
    }
    dropdownList.forEach(function (element) {
      element.classList.toggle('inactive')
    })
    dropdownCaret.classList.toggle('rotate')
  })

  function closeDropdown() {
    dropdown.setAttribute('aria-expanded', "false")
    dropdownList.forEach(function (element) {
      element.classList.add('inactive')
    })
    dropdownCaret.classList.remove('rotate')
  }

  dropdownList.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault()
      selectedValue = e.target.textContent
      e.target.textContent = selected.textContent
      selected.textContent = selectedValue
      closeDropdown()
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
      createTheGallery(data, sortBy)
    })
  })
}