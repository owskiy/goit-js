// "use strict";
// const arr = [];
// console.log(arr);

// const students = ["Den", "Nick", "Dave", "Helen"];
// console.log(students);
// // console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// students[0] = "Roy";
// console.log(students[0]);
// console.log(students);

// students[4] = "Mary"
// console.log(students);
// console.log(students.length);
// students.length = 6;
// console.log(students.length);
// console.log(students);
// console.log(students[5]);

// students.length = 4;
// console.log(students);

// for (let i = 0; i < students.length; i += 1) {
//     console.log("students item: ", students[i]);
// }

// for (let i = 0; i < 3; i += 1) {
//     students.push(`student-${i}`);
// }
// console.log("students list: ", students);
// console.log(students.length);

// for (const student of students) {
//     console.log(student);
// }

// const house = ["flat-1", "flat-2", flat-3, "flat-4", flat-5];
// for (const aFlat of house) {
//     console.log(aFlat);
// }
// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (const aDay of week) {
//   console.log(aDay);
// }

// const name = "Aleksandra"
// console.log(name);

// for (const character of name) {
//     console.log(character);
// }

// let studentName = "Roy";
// console.log(studentName);
// const studentsNew = [
//     "Roy",
//     "Nick",
//     "Dave",
//     "Helen",
//     "Mary",
//     "Sarah",
//     "Charly",
//     "Bob"
// ];
// studentName = studentsNew[Math.floor](studentsNew.length * Math.random());
// console.log("список студентов", studentsNew);

// for (const student of studentNew) {
//     if (student === studentName) {
//         message = "A student with this name aleready is in the database";
//         break;
//     }
//     message = "Welcome in our database of unique names!";
// }

// console.log(`console.log(${studentName}, ${message});`)

// const carsList = [
//     "BMW",
//     "Toyota",
//     "Mersedes",
//     "Porshe",
//     "Audi",
//     "Lexus",
//     "Honda",
//     "Mazda",
//     "Land Rover",
//     "Nissan",
//     "Subaru"
//   ];
  
// //   const myCar = "Land Rover";
// let car = carsList[Math.floor(carsList.length * Math.random())];

// console.log(car);
// letNewMessage = "У меня не было еще такой машины! А жаль...";
// for (const car of carsList) {
//     if (car === myCar) {
//         message = "Оу, у меня была такая тачка!";
//         break;
//     }
// }

// // многомерные массивы
// const matrix = [
//     [1, 2, 3], // [0]
//     [11, 22, 33], // [1]
//     [111, 222, 333] // [2]
//   ];
  
//   console.log(matrix[0][0]); // 1
//   console.log(matrix[0][1]); // 2
//   console.log(matrix[0][2]); // 3
  
//   console.log(matrix[1][0]); // 11
//   console.log(matrix[1][1]); // 22
//   console.log(matrix[1][2]); // 33
  
//   console.log(matrix[2][0]); // 111
//   console.log(matrix[2][1]); // 222
//   console.log(matrix[2][2]); // 333
  
//   // // вложенные циклы для перебора вложенных массивов
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log("Вложенный массив ", matrix[i]);
//     for (let j = 0; j < matrix.length; j += 1) {
//       console.log("Элемент вложенного массива", matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
//   console.log(total);
