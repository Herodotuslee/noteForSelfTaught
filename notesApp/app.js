//require : load build in module, load 3rd party, load our own file
console.log('Starting app.js');
// node js api --> os fs module : node api -> OS module  https://nodejs.org/api/fs.html

const fs = require('fs');
// (): argument list, install it in fs variable 
const os = require('os');
const notes = require('./notes.js');
const _=require('lodash');
const yargs =require('yargs');
const argv =yargs.argv;



var command =process.argv[2];

console.log('Command',command);
// process.argv : to show the command line
console.log('Process',process.argv);
console.log('Yargs',argv)

// --> Yargs { _: [], '$0': 'app.js' }
// Yargs { _: [ 'add' ], title: 'secrets', '$0': 'app.js' } -->better!!
// Yargs { _: [ 'added' ],
  // title: 'secrets',
  // body: 'tihs is my secre',
  // '$0': 'app.js' }  --> more clear 
if(command ==='add'){
	console.log("Adding new note");
	var note =notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note created')
		notes.logNote(note);

	}else{
		console.log('note title taken')

	}


} else if(command ==="list"){
	console.log('listing all notes');
	var alllNotes =notes.getAll();
	console.log(`Printing ${alllNotes.length} note(s).`)
	alllNotes.forEach((note)=>notes.logNote(note));
	
} else if(command ==="read"){
	console.log('Reading note');
	var note =notes.getNote(argv.title)
	// notes.read(argv.title);
	if(note){
		console.log('note found');
		console.log	(`Title : ${note.title}`);
		console.log	(`Body : ${note.body}`);

	}else{
		console.log('note no found')
	}
}  else if (command==='remove'){
	// notes.removeNote(argv.title);
	var noteRemoved =notes.removeNote(argv.title);
	var message = noteRemoved  ? 'note was removed' :' Note not found'
	// ? : run if its ture 
	console.log(message)
}
	else{
	console.log("command not recognized ")

}
// control the command line

// input --> node app.js remove --title="secrets"
// ---> use yarn  ---> run  npm install yargs@4.7.1  @ : version 

// relative path , ./ same folder 
// E : keyboard shortcut

var user =os.userInfo()

fs.appendFile('greeting.txt', `Hello AAA ${user.username}!! Your are ${notes.age}`, function(err){
	if(err){
		console.log('unable to write to file' )
	}
})
// !!!! `${user.username}` template string
// console.log(user)

// ???? why use var here?

// var res =notes.addNote()
// dummy function 

// !! we created "addNote" and we can call it!!!
// console.log(res)
// console.log('Result : ',notes.addNum(3,7));

// npm --> npm init 
// Google npm lodash, don't forget --save 


console.log(_.isString(true))
var fillteredArray =_.uniq(['Albert','Albert',1,2,3,5])
console.log(_.uniq(fillteredArray))

///get module back npm install

/// still need to save the file even if I use nodemon 

//  Getting input from user



