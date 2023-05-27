const registerForm = document.getElementById("registerForm");

let data = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let registerInfo = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    if (checkEmailAndUsernameDuplicate(registerInfo)) {
        alert("Username hoặc Email đã tồn tại !");
    } else if (checkEmailAndUsername(registerInfo)) {
        alert("Username hoặc Email không hợp lệ !");
    } else {
        data.push(registerInfo);
        localStorage.setItem("data", JSON.stringify(data));
    }
});

function checkEmailAndUsernameDuplicate(registerInfo) {
    let data = JSON.parse(localStorage.getItem("data")) || null;

    if (data == null) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        if(data[i].email == registerInfo.email || data[i].username == registerInfo.username) {
            return true;
        }
    }
    return false;
}

function checkEmailAndUsername(registerInfo) {
    if (registerInfo.username.includes(" ")) {
        return true;
    } else {
        return false;
    }
}