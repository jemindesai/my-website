const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  content.classList.toggle("expanded");
});

