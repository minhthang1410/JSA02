// let x = 8;
// let result = x % 2;

// if (result == 0) {
//     console.log("x là số chẵn");
// } else {
//     console.log("x là số lẻ");
// }

let imgURL = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403";

let img = document.createElement("img");
let main = document.getElementById("main");

img.src = imgURL;
img.width = 100;
main.appendChild(img);
console.log(img);