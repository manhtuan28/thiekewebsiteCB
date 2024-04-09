function info() {
  hoten = document.getElementById("ho_ten").value;
  matkhau = document.getElementById("mat_khau").value;

  var kq =
    "<table><tr><th colspan='2'>THÔNG TIN ĐĂNG KÝ</th></tr><tr><td><label for='user'>Họ tên</label></td><td>" +
    hoten +
    "</td></tr><tr><td><label for='pass'>Mật khẩu</label></td><td>" +
    matkhau +
    "</td></tr></table>";

  document.getElementById("kq").innerHTML = kq;
}
