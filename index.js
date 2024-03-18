// Hiển thị nút cuộn lên khi cuộn xuống dưới cùng
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// Cuộn lên đầu trang khi nút được nhấn
function scrollTopFunction() {
  document.body.scrollTop = 0; // Cho Firefox và Safari
  document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
}
