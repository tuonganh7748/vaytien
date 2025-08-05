function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("profileForm").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Sai tài khoản hoặc mật khẩu!";
  }
}

function submitProfile() {
  const name = document.getElementById("fullname").value;
  const amount = document.getElementById("amount").value;
  const idnum = document.getElementById("idnumber").value;
  if (!name || !amount || !idnum) {
    document.getElementById("msg").innerText = "Vui lòng điền đầy đủ thông tin.";
    document.getElementById("msg").className = "error";
  } else {
    document.getElementById("msg").innerText = "Hồ sơ đã được gửi thành công!";
    document.getElementById("msg").className = "success";
    function openCamera() {
  const video = document.getElementById("camera");
  video.style.display = "block";
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => {
      alert("Không thể mở camera: " + err);
    });
}
  }
}
