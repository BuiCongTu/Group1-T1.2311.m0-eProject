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
