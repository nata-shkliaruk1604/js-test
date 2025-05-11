/*------MODULE 1------*/

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = 4850;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`
// console.log(message);

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// const age = 16;
// const isAdult = age >= 18;
// console.log(isAdult);

// const correctPassword = "mangodab3st";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// const value = "24px";
// const numerical = Number.parseFloat(value);
// console.log(numerical);

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log("Addition result equals " + result);
// }
// add(15, 27, 10);

// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(15, 27, 10));

// function makeMessage(name, price) {
//     return `You picked ${name}, price per item is ${price} credits`;
// }
// console.log(makeMessage('Radar', 6150));

function calculateTotalPrice(orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
}
console.log(calculateTotalPrice(5, 100));
