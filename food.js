const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

function showOnlyCategory(category) {
  menuCards.forEach(function (card) {
    const cardCategory = card.getAttribute("data-category");
    const shouldShow = category === "all" || cardCategory === category;
    card.style.display = shouldShow ? "block" : "none";
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const selectedCategory = button.getAttribute("data-filter");
    showOnlyCategory(selectedCategory);
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.innerHTML = '<i class="ri-check-line"></i>';
    button.style.backgroundColor = "#4caf50";

    setTimeout(function () {
      button.innerHTML = '<i class="ri-add-line"></i>';
      button.style.backgroundColor = "";
    }, 1200);
  });
});