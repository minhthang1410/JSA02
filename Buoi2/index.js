// let i = 14; //biểu thức 1: khởi tạo biến lặp
//vòng lặp while sẽ kiểm tra điều kiện trước khi thực hiện đoạn code trong vòng lặp
// while (i < 15) { //biểu thức 2:điều kiện lặp
//     console.log("while loop: " + i);
//     i++; //biểu thức 3: thay đổi biến lặp sau mỗi lần lặp
// };

// //vòng lặp do while sẽ thực hiện code ít nhất 1 lần
// do {
//     console.log("do while loop: " + i);
//     i++;
// } while (i < 15);

// for (let j = 1; j > -10; j--) {
//     console.log(j)
// }

//array: mảng - dùng để lưu nhiều biến số
// let list_name = ["thắng", "bảo", "trâm anh", "linh", "yến"];

// for (let i = 0; i < list_name.length; i++) {
//     console.log(list_name[i]);
// }
// //Create
// console.log(list_name);
// list_name.push("như");
// console.log(list_name);

// //Read
// console.log(list_name[4]);

// //Update
// list_name[0] = "Thắng";
// console.log(list_name);

// //Delete
// list_name.pop(); //xóa phần tử cuối cùng trong mảng
// list_name.splice(2, 1);//xóa phần tử ở bất kì vị trí tham số đầu là vị trí bắt đầu xóa, tham số thứ 2 là số phần tử muốn xóa
// console.log(list_name);

//object: vật thể
// let user = {
//     name: "Thắng",
//     age: 25,
//     job: "teacher",
//     location: "HCM"
// };

// //Read
// console.log(user);
// // console.log(user.job);
// // console.log(user['job']);
// // console.log(typeof(user));

// //Create
// user.company = "MindX";
// console.log(user);

// //Update
// user.location = "HN";
// console.log(user);

// //Delete
// delete user.company
// console.log(user);\
let computer_list = [
    {
        brand: "Lenovo",//h3
        os: "Window",//p
        ram: 16,//p
        ssd: 512,//p
        weight: "1.5kg",//p
        img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop_82fg01h8vn.jpg"
    },
    {
        brand: "Apple",//h3
        os: "macOS",//p
        ram: 16,//p
        ssd: 512,//p
        weight: "1.5kg",//p
        img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop_82fg01h8vn.jpg"
    }
]
let myComputer = {
    brand: "Lenovo",//h3
    os: "Window",//p
    ram: 16,//p
    ssd: 512,//p
    weight: "1.5kg",//p
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop_82fg01h8vn.jpg"
}

let product = document.getElementById("product");
product.style = "border: 1px solid red";

let img = document.createElement("img");
img.src = myComputer.img;
product.appendChild(img);

let brand = document.createElement("h3");
brand.innerText = myComputer.brand;
product.appendChild(brand);

let os = document.createElement("p");
os.innerText = myComputer.os;
product.appendChild(os);

let ram = document.createElement("p");
ram.innerText = myComputer.ram;
product.appendChild(ram);

let ssd = document.createElement("p");
ssd.innerText = myComputer.ssd;
product.appendChild(ssd);