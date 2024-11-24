document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#star-rating .star");
  const thankYouMessage = document.getElementById("thank-you-message");

  function chooseStarsRating(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("text-yellow-400");
        star.classList.remove("text-white");
      } else {
        star.classList.remove("text-yellow-400");
        star.classList.add("text-white");
      }
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-value"));
      chooseStarsRating(rating);

      thankYouMessage.textContent = "Thank you for your feedback!";
    });
  });
});

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}
