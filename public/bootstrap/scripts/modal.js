document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#star-rating .star");
  const thankYouMessage = document.getElementById("thank-you-message");

  function chooseStarsRating(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
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
