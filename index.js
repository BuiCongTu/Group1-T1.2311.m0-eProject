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
