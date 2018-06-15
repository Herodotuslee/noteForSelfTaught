console.log('Starting notes.js');

// console.log(module)

// only export is useful!!

module.exports.age =25
// Don't forget  S!!!  after export 
// stored some property 

// module.exports.addNote = () =>{
//  console.log('addnote')
//  return 'new note'
// };
//arrow function , no function and wtih =>

// var addNum =(a,b)=>{
// 	console.log(a+b)
// };


// module.exports.addNum =(a,b)=>{
// 	console.log(a+b)
// };

// still neet to put a and b in the ()

const fs =require('fs');

var fetchNotes =()=>{
	try{
	var noteString =fs.readFileSync('notes-data.json');
	return JSON.parse(noteString)
	} catch(e){
		return [];

	}

};

var saveNotes =(notes) =>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};



var addNote =(title,body)=>{
	// console.log('Adding note',title,body);
	var notes =fetchNotes();
	var note  ={
		title,
		body
	};

	// if not file exist it will fail

	// for pretent no notes-data
	// try{
	// var noteString =fs.readFileSync('notes-data.json');
	// notes=JSON.parse(noteString)

	// } catch(e){

	// }
	// console.log("note :",note)
	// console.log("notes :",notes)
	// console.log("title :",title)
	// console.log("body :",body)
	
	// var duplicateNotes = notes.filter((note)=>{
	// 	return note.title===title;

	// });

	// for pretent same title
		var duplicateNotes = notes.filter((note)=>note.title===title);

		if(duplicateNotes.length===0){
			notes.push(note);
			// fs.writeFileSync('notes-data.json',JSON.stringify(notes));
			saveNotes(notes);
			return note;
			// if no return , undefine will return 

		}


	// add the item


}

var getAll =()=>{
	console.log('Getting all notes')
	return fetchNotes();

}

var getNote =(title)=>{
	console.log("Getting note", title)
	var notes =fetchNotes();
	var filteredNotes = notes.filter((note)=>note.title===title);
	return filteredNotes[0]

	// why [0]

};

var read =()=>{
	
}
var removeNote =(title)=>{
	console.log("Removing note", title)
	var notes = fetchNotes();
	var filteredNotes =notes.filter((note) =>note.title !==title);

	saveNotes(filteredNotes);

	return notes.length !==filteredNotes.length;
	// if ture --> it was remove
	//fetch note
	// filter notes. removing the one with title of argument
	//save nrw notes array 

}


var logNote =(note) =>{
		console.log('---')

		console.log	(`Title : ${note.title}`);
		console.log	(`Body : ${note.body}`);
}
module.exports ={
	// addNote : addNote
	addNote,
	// don't forget " ,"
	getAll,
	read,
	removeNote,
	getNote,
	logNote
	// addNum

}
