function initLikes(likes) {
  // Stocke les éléments boutons "like" dans la variable likeBtn
  let likeBtn = likes;

  likeBtn.forEach(button => {
    // Initialise la variable clicked à false pour chaque bouton
    let clicked = false;

    // Ajoute un écouteur d'événement 'click' à chaque bouton
    button.addEventListener('click', function (e) {
      e.preventDefault();
      // Trouve le conteneur le plus proche contenant le bouton et le compteur de likes
      const likeContainer = e.currentTarget.closest('.like-container');
      const closestLikeCount = likeContainer.querySelector('.like-count');

      // Si le bouton a déjà été cliqué
      if (clicked) {
        // Réinitialise clicked à false
        clicked = false;
        // Décrémente le compteur de likes
        closestLikeCount.textContent = parseInt(closestLikeCount.textContent) - 1;
        // Décrémente le total de likes
        totalLikesSpan.textContent = parseInt(totalLikesSpan.textContent) - 1;
      } else { // Si le bouton n'a pas encore été cliqué
        // Définit clicked à true
        clicked = true;
        // Incrémente le compteur de likes
        closestLikeCount.textContent = parseInt(closestLikeCount.textContent) + 1;
        // Incrémente le total de likes
        totalLikesSpan.textContent = parseInt(totalLikesSpan.textContent) + 1;
      }
    });
  });
}