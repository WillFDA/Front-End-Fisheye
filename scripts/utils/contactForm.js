const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("yourMessage");
const submitButton = document.querySelector('.contact_button');

function displayModal() {
    modal.showModal()
}

function closeModal() {
    modal.setAttribute("closing", "");
    modal.addEventListener(
        "animationend",
        () => {
          modal.removeAttribute("closing");
          modal.close();
        },
        { once: true }
      );
}

function submitForm(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérez les valeurs des champs de formulaire
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const messageValue = message.value;

  // Logguez les valeurs dans la console
  console.log('Prénom :', firstNameValue);
  console.log('Nom :', lastNameValue);
  console.log('Email :', emailValue);
  console.log('Message :', messageValue);
  event.target.reset();
  closeModal();
}