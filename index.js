const cardOne = document.querySelector("._founding-card1");
const cardOneOpener = document.getElementById("card-button1");
const cardOneCloseMenu = document.querySelector(".card1_nav");

const cardTwo = document.querySelector("._founding-card2");
const cardTwoOpener = document.getElementById("card-button2");
const cardTwoCloseMenu = document.querySelector(".card2_nav");

cardOneOpener.addEventListener("click", () => {
  cardOne.classList.add("active");
});
cardOneCloseMenu.addEventListener("click", () => {
  cardOne.classList.remove("active");
});


cardTwoOpener.addEventListener("click", () => {
  cardTwo.classList.add("active");
});
cardTwoCloseMenu.addEventListener("click", () => {
  cardTwo.classList.remove("active");
});
