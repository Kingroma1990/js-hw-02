"use strict";


// let input;
// const numbers = [];
// let total = 0;

// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, 
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. 
// После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.


let input;
const numbers = [];
let total = 0;
input = prompt('Введите число!');
while (input !== null) {
 const numberInput = Number(input);
 numbers.push(numberInput);
 input = prompt('Введите число:');
}
const addSum = function(array) {
 let summ = 0;
 for (let element of array) {
   summ += element;
 }
 return summ;
}
total = addSum(numbers);
const message = `Общая сумма чисел равна ${total}`;
console.log(message);