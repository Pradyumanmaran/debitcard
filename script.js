const cardHolderName = document.querySelector("#card-info-name");
const cardHolderNameInput = document.querySelector("#ccname");
const cardHolderNumber = document.querySelector("#card_number");
const cardHolderNumberInput = document.querySelector("#chNumber");
const cardHolderExpires = document.querySelector("#card-info-expire");
const cardHolderExpiresInput = document.querySelector("#cardExperiesInput");
const change = document.querySelector(".change");
const cvcInput = document.querySelector("#cvc_input");
const cvvNum = document.querySelector(".cvv_content");
const cardfrontRotation = document.querySelector(".cardFrontRotation");
const cardbackRotation = document.querySelector(".cardbackRotation");
const card_back = document.querySelector(".cardback");
const card_frame = document.querySelector(".card_frame");
const card_front = document.querySelector(".card_fronPart");

// Function to update CVV content
const updateCvvContent = () => {
  cvvNum.textContent = cvcInput.value;
};

console.log(cvcInput);
console.log(cvvNum);

cvcInput.addEventListener("focus", () => {
  // change.classList.add("card_back");
  // change.classList.add("cardbackRotation");
  // cardfrontRotation.style.display = "block";
  card_frame.style.transform = "perspective(1000px) rotateY(0deg)";
  card_back.style.transform = "perspective(1000px) rotateY(0deg)";
});
// Add input event listener to continuously update CVV content while typing
cvcInput.addEventListener("input", updateCvvContent);

cvcInput.addEventListener("blur", () => {
  cvcInput.removeEventListener("input", updateCvvContent);
  card_frame.style.transform = "perspective(1000px) rotateY(0deg)";
  card_back.style.transform = "perspective(1000px) rotateY(180deg)";

});

cardHolderNameInput.addEventListener("input", () => {
  cardHolderName.textContent = cardHolderNameInput.value;
});
cardHolderNumberInput.addEventListener("input", () => {
  cardHolderNumber.textContent = cardHolderNumberInput.value;
});
cardHolderExpiresInput.addEventListener("input", () => {
  cardHolderExpires.textContent = cardHolderExpiresInput.value;
});
console.log(cardHolderNumber.textContent);
cardHolderNameInput.value;


