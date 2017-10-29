//
// Object Destructuring
//

// const person = {
// 	name: 'Jakie',
//   age: 26,
//   location: {
//     city: 'Houston',
//     temp: 75
//   }
// };

// // ES5 traditional way of assigning object properties to single variable
// // const name = person.name;
// // const age = person.age;

// // ES6 destructure object pull named properties
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(
//     `It's ${temperature} degrees in ${city}.`
//   );
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['221 County Road 3014', 'Dayton', 'TX', '77535'];

const [, city, state = 'New York', zip] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}.`);
