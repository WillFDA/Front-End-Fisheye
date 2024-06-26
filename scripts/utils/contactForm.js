// Sélectionne les éléments du DOM correspondants
const modal = document.getElementById("contact_modal"); // La fenêtre modale
const firstName = document.getElementById("firstName"); // Le champ de prénom
const lastName = document.getElementById("lastName"); // Le champ de nom
const email = document.getElementById("email"); // Le champ d'email
const message = document.getElementById("yourMessage"); // Le champ de message
const submitButton = document.querySelector('.contact_button'); // Le bouton de soumission
const form = document.getElementById('form')
const contactButton = document.querySelector('.contact_button')
const closeContactModal = document.querySelector('.close-contact') // Le bouton de fermeture
form.addEventListener('submit', submitForm); // Ajoute un écouteur d'événement sur la soumission du formulaire
contactButton.addEventListener('click', displayModal); // Ajoute un écouteur d'événement sur le clic du bouton de contact
closeContactModal.addEventListener('click', closeModal); // Ajoute un écouteur d'événement sur le clic du bouton de fermeture
// Fonction pour afficher la fenêtre modale
function displayModal() {
  modal.showModal(); // Affiche la fenêtre modale
}

// Fonction pour fermer la fenêtre modale avec une animation
function closeModal() {
  modal.setAttribute("closing", ""); // Ajoute un attribut "closing" pour déclencher l'animation
  modal.addEventListener( // Ajoute un écouteur d'événement sur l'animation
    "animationend", 
    () => {
      modal.removeAttribute("closing"); // Supprime l'attribut "closing" après l'animation
      modal.close(); // Ferme la fenêtre modale
    },
    { once: true } // L'écouteur d'événement sera supprimé après le premier déclenchement
  );
}



// Fonction appelée lors de la soumission du formulaire
function submitForm(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs des champs de formulaire
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const messageValue = message.value;

  // Affiche les valeurs des champs dans la console
  console.log('Prénom :', firstNameValue);
  console.log('Nom :', lastNameValue);
  console.log('Email :', emailValue);
  console.log('Message :', messageValue);

  // Réinitialise les champs du formulaire
  event.target.reset();

  // Ferme la fenêtre modale
  closeModal();
}