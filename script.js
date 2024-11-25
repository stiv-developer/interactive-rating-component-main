
let selectedRating = null; // To store the selected rating

function changebg(value){
    
    // Remove the highlight from all other ratings
    const allRatings = document.querySelectorAll(".group-child");

    const allSpan = document.querySelectorAll(".group-child span");

    allRatings.forEach((rating) => {
        // Remove class select-number
        rating.classList.remove("select-number");
    });

    allSpan.forEach((rating) => {
        rating.classList.remove("select-number-span");
    });

    // Add the highlight to the clicked rating
    value.classList.add("select-number");

    value.children[0].classList.add("select-number-span");

    // Store the selected rating
    // Selected number from span
    selectedRating = value.textContent.trim();
}


function acceptForm() {
    if (!selectedRating) {
      alert("Please select a rating before submitting!");
      return;
    }
  
    // Update the thank-you card with the selected rating
    const thankYouMessage = document.querySelector(".second .group span");
    thankYouMessage.textContent = `You selected ${selectedRating} out of 5`;
  
    // Show the thank-you card and hide the rating card
    const firstCard = document.querySelector(".card.first");
    const secondCard = document.querySelector(".card.second");
    firstCard.style.display = "none";
    secondCard.style.display = "block";
  }