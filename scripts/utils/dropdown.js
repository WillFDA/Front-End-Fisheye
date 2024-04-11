const dropdown = document.querySelector('#sort-options')
const dropdownContent = document.querySelector('#sort-options')
const dropdownList = document.querySelectorAll('.dropdown-content > li')
const dropdownCaret = document.querySelector('.caret')
const selected = document.querySelector('.selected')
let selectedValue = selected.textContent
console.log(selectedValue)
dropdown.addEventListener('click', function (e) {
  dropdown.dataset.opened === "false" ? dropdown.dataset.opened = "true" : dropdown.dataset.opened = "false"
  dropdownList.forEach(function (element) {
    element.classList.toggle('inactive')
  })
  dropdownCaret.classList.toggle('rotate')
})

function closeDropdown() {
  dropdown.dataset.opened = "false"
  dropdownList.forEach(function (element) {
    element.classList.toggle('inactive')
  })
  dropdownCaret.classList.remove('rotate')
}

dropdownList.forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    selectedValue = e.target.textContent
    e.target.textContent = selected.textContent
    selected.textContent = selectedValue
    dropdown.dataset.opened = "false"
    dropdownList.forEach(function (element) {
      element.classList.remove('inactive')
    })
    dropdownCaret.classList.remove('rotate')
    closeDropdown()
  })
})
