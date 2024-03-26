// search
var searchInput = document.getElementById("searchInput");
var searchButton = document.querySelector(".btn-primary");

// Bắt sự kiện khi người dùng nhấn Enter trong trường input
searchInput.addEventListener("keypress", function (event) {
  // Kiểm tra xem phím Enter đã được nhấn
  if (event.key === "Enter") {
    // Chuyển hướng đến trang search.html
    window.location.href = "./search.html";
  }
});

// Bắt sự kiện khi người dùng nhấn vào nút search
searchButton.addEventListener("click", function () {
  // Chuyển hướng đến trang search.html
  window.location.href = "./search.html";
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
function cancel() {
  window.location.href = "./index.html";
}
