let danhSachGioTraiCay = [
    ["mango", 10],
    ["watermelon", 12],
    ["grape", 15],
    ["apple", 19]
]

// console.log("I have " + danhSachGioTraiCay[1][1] + " " + danhSachGioTraiCay[1][0])

// for (let i = 0; i < danhSachGioTraiCay.length; i++) {
//     console.log(danhSachGioTraiCay[i]);
//     // for (let j = 0; j < danhSachGioTraiCay[i].length; j++) {
//     //     console.log(danhSachGioTraiCay[i][j]);
//     // }
// }
// console.log("Vòng lặp for of");
// for (let i of danhSachGioTraiCay) {
//     console.log(i);
// }

var myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everythings!"]
}

// console.log(myDog['name'])

for (let i in myDog) {
    console.log(i + ":" + myDog[i]);
}

// console.log(myDog);
// myDog.name = "Husky";
// console.log(myDog);
// myDog.color = "Brown";
// console.log(myDog);
// console.log(myDog.friends[0]);