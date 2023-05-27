//xóa Local storage
localStorage.clear();
//lưu dữ liệu xuống local storage
localStorage.setItem("name", "Thắng");

let student = {
    namee: "Thắng",
    age: "18",
    GPA: 4.0
}

localStorage.setItem("student", JSON.stringify(student));

let namee = localStorage.getItem("name");
console.log(namee);

let studentFromLocal = JSON.parse(localStorage.getItem("student"));
console.log(studentFromLocal);
console.log(typeof studentFromLocal);