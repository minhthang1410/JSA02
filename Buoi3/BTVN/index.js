// let height = 8;

// for (let i = 1; i <= height; i++){
//     let line = "";
//     for (let j = 1; j <= height - i;j++) {
//         line += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         if (k == 1 || k == 2 * i - 1 || i == height){
//             line += "*";
//         } else {
//             line += " ";
//         }
//     }

//     console.log(line);
// }

// let number = [1, 2, 6, 123, 523, 7, 12, 8, 24, 82, 379, 1, 23, 58923, 0];

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) {
//         console.log(number[i]);
//     }
// }

// let answer = prompt("Hello ! What your name ?");
// console.log(answer);

for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*"
    }
    console.log(line)
}