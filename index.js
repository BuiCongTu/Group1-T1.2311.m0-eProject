document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    var searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== "") {
      window.location.href = "./search.html"; // Chuyển hướng đến trang search.html
    }
  });
// Lắng nghe sự kiện scroll
window.onscroll = function () {
  scrollFunction();
};

// Hiển thị hoặc ẩn nút scroll to top
function scrollFunction() {
  var navbar = document.querySelector(".nav-2-header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
  // scroll to top
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// Cuộn lên đầu trang khi nút được nhấp
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//screen min-width 576px

$(".navbar-toggler").click(function () {
  $("#navbarNavDropdown").toggleClass("show");
});
function cancel() {
  window.location.href = "./index.html";
}
