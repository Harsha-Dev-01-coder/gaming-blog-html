const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log("Hello Champ");
})




const title = document.querySelector("#title");
const button = document.querySelector("#change-btn");

button.addEventListener("click", function () {
  title.textContent = "Esports central";
});




const card = document.querySelector(".card");
const colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("click", function () {
  card.style.backgroundColor = "blue";
});




const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", function () {

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

});




let count = 0;

const countText = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase-btn");

increaseBtn.addEventListener("click", function () {

  count++;

  countText.textContent = count;

});