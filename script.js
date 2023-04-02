const submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  const inputList = Array.from(
    document.querySelectorAll(".wrapper-rating input")
  );
  const customerRating = document.querySelector(".customer-rating");
  const ratingTile = document.querySelector(".rating-tile");
  const thankYouTile = document.querySelector(".thank-you-tile");

  // Checks in Array of radio buttons, which one is checked
  inputList.forEach((element) => {
    const currentElementIndex = inputList.indexOf(element) + 1;
    if (element.checked) {
      customerRating.innerHTML = currentElementIndex;
      // Handels visibilty of tiles
      ratingTile.style.display = "none";
      thankYouTile.style.display = "grid";
    }
  });
}
