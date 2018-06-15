var person ={
	name:"Albert"
};

person.age= 25;
person.name='Mike'

console.log(person);

// Alberts-MacBook-Air:playground albert$ node debug.js 
// { name: 'Mike', age: 25 }
// Alberts-MacBook-Air:playground albert$ node -v
// v8.11.2
// Alberts-MacBook-Air:playground albert$ node inspect debug.js 
// < Debugger listening on ws://127.0.0.1:9229/e4770ac6-88de-4a34-b551-af8d1fbcf250
// < For help see https://nodejs.org/en/docs/inspector
// < Debugger attached.
// Break on start in debug.js:1
// > 1 (function (exports, require, module, __filename, __dirname) { var person ={
//   2 	name:"Albert"
//   3 };
// debug> 


// debug> list(10)
// > 1 (function (exports, require, module, __filename, __dirname) { var person ={
//   2 	name:"Albert"
//   3 };
//   4 
//   5 person.age= 25;
//   6 person.name='Mike'
//   7 
//   8 console.log(person);
//   9 
//  10 });
// debug> 
