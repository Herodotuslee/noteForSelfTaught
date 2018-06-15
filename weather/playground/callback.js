
// id : argument
// callback function  pass function to a function  
var getUser =(id, callback) =>{
	var user = {
		id: id,
		name:'Albert'
	};
	setTimeout(()=>{
		callback(user);

	},3000)
	


};

// when data back
getUser(31,(userObject)=>{
	console.log(userObject);

})