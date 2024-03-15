const modal = document.getElementById("contact_modal");

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


