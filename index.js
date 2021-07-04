// Initial Ratings
const ratings = {
  sony: 4.7,
  samsung: 4.6,
  lg: 4.3,
  sharp: 2.5,
  panasonic: 3.75,
};
// Total stars
const MAX_STAR = 5;
// Events
document.addEventListener("DOMContentLoaded", getRatings);

// Form Elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");
// Init Product
let product;

productSelect.addEventListener("change", e => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;
  // Check for rating <= 5
  if (rating > 5) {
    alert("Nilai antara 1 - 5.");
    return;
  }
  // Change rating value of product
  ratings[product] = parseFloat(rating);
  getRatings();
});

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    if (ratings.hasOwnProperty(rating)) {
      // Get Percentage
      const starPercentage = (ratings[rating] / MAX_STAR) * 100;
      // Round to nearest 10
      const starPercentageRounded = `${Math.floor(starPercentage / 10) * 10}%`;
      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
      // Add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating].toFixed(1);
    }
  }
}
