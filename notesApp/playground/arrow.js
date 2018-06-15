// var square =(x) => {
// 	var result = x*x;
// 	return result;
// };

// var square =(x) => x*x;

var square =x => x*x;

// if only 1 arguement ,you can delete ()

console.log(square(9))

var user ={
	name:"Andrew",
	sayHi:() =>{
		// can't get arguments keywords
		// no "this"
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},

	// ES 6
	sayHiAlt (){
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
}

// user.sayHi();
user.sayHi(1,2,3);