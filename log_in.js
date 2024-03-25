function signInWithGoogle() {
  window.location.href = "http://gmail.com";
}

function signInWithFacebook() {
  window.location.href = "http://facebook.com";
}
function cancel() {
  // Implement cancel functionality (e.g., redirect to another page)
}

function registerUser() {
  // Lấy dữ liệu từ form
  const memberName = document.getElementById("member_name").value;
  const fullName = document.getElementById("full_name").value;
  const gender = document.getElementById("gender").value;
  const dobDay = document.getElementsByName("dob_day").value;
  const dobMonth = document.getElementsByName("month").value;
  const dobYear = document.getElementsByName("year").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  // Kiểm tra mật khẩu và xác nhận mật khẩu
  if (password !== confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp!");
    return;
  }

  // Gửi dữ liệu đăng ký đến server (trong ví dụ này chỉ là mock API)
  // Đây là nơi bạn sẽ gửi dữ liệu đăng ký đến server thực tế để xử lý

  // Hiển thị thông báo hoặc chuyển hướng người dùng sau khi đăng ký thành công
  alert("Đăng ký thành công!");
  // Chuyển hướng người dùng đến trang đăng nhập hoặc trang khác
  window.location.href = "log_in.html";
}
