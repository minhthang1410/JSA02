const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginInfo = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    if (checkLogin(loginInfo)) {
        console.log("Đăng nhập thành công");
        location = "https://shopee.vn/";
    } else {
        console.log("Đăng nhập thất bại");
    }
})

function checkLogin(loginInfo) {
    let data = JSON.parse(localStorage.getItem("data")) || null;

    if (data == null) {
        alert("Chưa có thông tin đăng ký");
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].password == loginInfo.password && data[i].username == loginInfo.username) {
            return true;
        }
    }
    return false;
}