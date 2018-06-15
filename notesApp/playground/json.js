// //json.js
// json is just a string
// var obj ={
// 	name:'Albert'

// } ;
// //name : property

// var stringObj= JSON.stringify(obj);
// //convert to string

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString ='{"name":"Albert","age": 25}';

// var person =JSON.parse(personString);
// // from string to original form

// console.log(typeof person);
// console.log(person)

const fs =require('fs');

var originalNote ={
	title:'some title',
	body:'Some body'
}

//originalNoteString
// to write for input
var originalNoteString=JSON.stringify(originalNote);
// to string
fs.writeFileSync('notes.json',originalNoteString);
// to write and save in notes.json in JSon form
var noteString =fs.readFileSync('notes.json');
var note=JSON.parse(noteString)
// to read JSON file ,take the String to Javascript array , to an object 
console.log(typeof note)
console.log(note.title)