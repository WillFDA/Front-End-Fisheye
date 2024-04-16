let likeBtn = [];

function initLikes(likes) {
  likeBtn = likes;
  console.log(likeBtn);
  likeBtn.forEach(button => {
    let clicked = false; // Initialiser clicked pour chaque bouton
    button.addEventListener('click', function (e) {
      const likeContainer = e.currentTarget.closest('.like-container');
      const closestLikeCount = likeContainer.querySelector('.like-count');

      if (clicked) {
        clicked = false;
        closestLikeCount.textContent = parseInt(closestLikeCount.textContent) - 1;
      } else {
        clicked = true;
        closestLikeCount.textContent = parseInt(closestLikeCount.textContent) + 1;
      }
    });
  });
}

console.log(likeBtn);