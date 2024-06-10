// ADD REMOVE ACTIVE
let btnContainer = document.getElementById("myLIST");

let btns = btnContainer.getElementsByClassName("item_bar");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// PAGINATE

// function setActive(event) {
//   event.preventDefault();

//   // Remove active class from all pagination spans
//   const spans = document.querySelectorAll(".pagination span");
//   spans.forEach((span) => span.classList.remove("active"));

//   // Add active class to the clicked span
//   event.target.classList.add("active");

//   // Hide all rows and show the target row
//   const targetId = event.target.getAttribute("data-target");
//   const rows = document.querySelectorAll(".row_card");

//   console.log(targetId);
//   console.log(rows);
//   rows.forEach((row) => {
//     if (row.id === targetId) {
//       row.style.display = "block";
//     } else {
//       row.style.display = "none";
//     }
//   });

//   // Scroll to the top of the page
//   window.scrollTo({
//     top: 500,
//     behavior: "smooth",
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  // Check localStorage for the last active page
  const lastActivePage = localStorage.getItem("activePage") || "pagi1";
  setActivePage(document.getElementById(lastActivePage));

  if (!lastActivePage.startsWith("news")) {
    localStorage.setItem("activePage", "pagi1");
  }
});

function setActive(event) {
  event.preventDefault();

  // Remove active class from all pagination spans
  const spans = document.querySelectorAll(".pagination span");
  spans.forEach((span) => span.classList.remove("active"));

  // Add active class to the clicked span
  const targetSpan = event.target;
  targetSpan.classList.add("active");

  // Hide all rows and show the target row
  const targetId = targetSpan.getAttribute("data-target");
  const rows = document.querySelectorAll(".row_card");

  rows.forEach((row) => {
    if (row.id === targetId) {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });

  // Save the active page to localStorage
  localStorage.setItem("activePage", targetSpan.id);

  // Scroll to the top of the page
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
}

// Helper function to set the active page by span element
function setActivePage(spanElement) {
  // Remove active class from all pagination spans
  const spans = document.querySelectorAll(".pagination span");
  spans.forEach((span) => span.classList.remove("active"));

  // Add active class to the target span
  spanElement.classList.add("active");

  // Hide all rows and show the target row
  const targetId = spanElement.getAttribute("data-target");
  const rows = document.querySelectorAll(".row_card");
  rows.forEach((row) => {
    if (row.id === targetId) {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });
}

// ẨN HIỆN PRODUCT

function showSection(sectionId) {
  // Hide all sections
  var sections = document.querySelectorAll(".content-section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });
  // Show the selected section
  document.getElementById(sectionId).style.display = "block";

  // Scroll to the top of the page
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
}

// RESPONSIVE

let bar = document.getElementById("bar_dropDown");
let navBar = document.querySelector(".nav_bar");

function showHideNavBar() {
  navBar.classList.toggle("active");
}

// BACK TO TOP

// Tạo nút Back to Top
// Hiển thị nút khi cuộn xuống 100px từ đầu trang
window.onscroll = function () {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Cuộn mượt mà khi nhấp vào nút
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
