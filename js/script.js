document.querySelector(".hero h1").textContent =
  "Breaking Gaming News";

const newsBtn = document.querySelector(".news-btn");

newsBtn.addEventListener("click", function () {
  alert("New tournament updates available!");
});

const card = document.querySelector(".card");
const colorBtn = document.querySelector(".color-btn");

colorBtn.addEventListener("click", function () {
  card.style.backgroundColor = "darkred";
});

const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }

});