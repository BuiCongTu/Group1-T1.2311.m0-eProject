// kiểm tra số điện thoại nhập vào và định dạng xxx-xxxxx(xxx)
document.getElementById("phone");

document.addEventListener("input", formatPhoneNumber);

function formatPhoneNumber() {
  // Lấy giá trị từ ô số điện thoại
  var inputPhone = document.getElementById("phone");
  var phoneNumber = inputPhone.value.replace(/[^\d]/g, ""); // Loại bỏ tất cả các ký tự không phải số

  // Kiểm tra xem chiều dài của số điện thoại và định dạng nó

  var formattedPhoneNumber =
    phoneNumber.length >= 3 &&
      ((phoneNumber.length >= 8 && phoneNumber.substring(8, 10) === "789") ||
        (phoneNumber.length >= 10 && phoneNumber.substring(10) !== "789"))
      ? phoneNumber.substring(0, 3) +
      "-" +
      phoneNumber.substring(3, 8) +
      "(" +
      phoneNumber.substring(8) +
      ")"
      : phoneNumber;

  inputPhone.value = formattedPhoneNumber;
}

// xu ly form

// Ham scroll và focus đến field chưa nhập data
function scrollToTop(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}


function resetPassword() {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if (password.length < 5 || !isValidPassword(password)) {
    alert(
      "Password Error: must have at least 5 characters and must include uppercase letters, lowercase letters, numbers and special characters"
    );
    document.getElementById("password").focus();
  } else if (confirmpassword !== password) {
    alert("Error: Confirmation password does not match.");
    document.getElementById("confirmpassword").focus();
    scrollToTop("confirmpassword"); // Cuộn đến trường confirmpassword
    return false;
  } else {
    alert("Completed password reset");
    window.location.href = "./log_in.html";
  }
}
// for contact form


function isValidPassword(password) {
  // Hàm kiểm tra mật khẩu có ít nhất một chữ thường, một chữ hoa, một ký tự đặc biệt và một số.
  var passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{5,}$/;
  return passwordPattern.test(password);
}

function isValidEmail(email) {
  // Hàm kiểm tra định dạng email
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
  // Hàm kiểm tra số điện thoại chỉ chứa ký tự số
  var phonePattern = /^[0-9]+$/;
  return phonePattern.test(phone);
}

function isValidBirthdate(year) {
  // Hàm kiểm tra năm nhuận (đơn giản, không xử lý đầy đủ)
  var year = new Date(year).getFullYear();
  return year % 4 === 0;
}

// ham lay ngay thang nam
function populateDropdown(start, end, elementId) {
  var dropdown = document.getElementById(elementId);

  for (var i = start; i <= end; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    dropdown.add(option);
  }
}
// hàm để mặc định 1980
function populateDropdown(startYear, endYear, elementId) {
  var dropdown = document.getElementById(elementId);

  for (var year = startYear; year <= endYear; year++) {
    var option = document.createElement("option");
    option.text = year;
    option.value = year;
    if (year === 1980) {
      option.selected = true;
    }
    dropdown.add(option);
  }
}
// Populate Days dropdown with options 1-31
populateDropdown(1, 31, "day");

// Populate Months dropdown with options 1-12
populateDropdown(1, 12, "month");

// Populate Years dropdown with options from current year to 1900
populateDropdown(1950, new Date().getFullYear(), "year");

// city
var cities = [
  "Hồ Chí Minh",
  "Hà Nội",
  "An Giang",
  "Vũng Tàu",
  "Bạc Liêu",
  "Bắc Kạn",
  "Bắc Giang",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Dương",
  "Bình Định",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Cần Thơ",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "	Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tây",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Huế",
  "Hòa Bình",
  "Hậu Giang",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lào Cai",
  "Lạng Sơn",
  "Lâm Đồng",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
  "Quy Nhơn",
];

// Hàm để tạo các tùy chọn cho dropdown
function populateCityDropdown() {
  var dropdown = document.getElementById("city");

  for (var i = 0; i < cities.length; i++) {
    var option = document.createElement("option");
    option.value = cities[i];
    option.text = cities[i];
    dropdown.add(option);
  }
}

// Gọi hàm để khi nhấn show password
populateCityDropdown();
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}