function info() {
  taikhoan = document.getElementById("username").value;
  matkhau = document.getElementById("password").value;

  if (taikhoan == "") {
    note_user = "Nhập cái tài khoản vào???";
  } else {
    note_user = "";
  }

  if (matkhau == "") {
    note_pass = "Nhập mật khẩu vào???";
  } else if (matkhau.length <= 6) {
    note_pass = "Mật khẩu phải có ít nhất 6 ký tự";
    document.getElementById("password").focus();
  } else {
    note_pass = "";
  }

  document.getElementById("error-user").innerHTML = note_user;
  document.getElementById("error-pass").innerHTML = note_pass;
}
