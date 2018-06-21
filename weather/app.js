// const request = require('request'),
const  		yargs   = require('yargs'),
		    	geocode = require('./geocode/geocode'),
					weather = require('./weather/weather');
		    	argv  	= yargs
			.options({
				a :{
					demand : true,
					alias  : 'address',
					discribe : "Adress to fetch weather for",
					string :true
				}
			})
			.help()
			.alias('help','h')
			.argv;
// console.log(argv)

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
	if(errorMessage){
		console.log(errorMessage);
	} else{
		console.log(results.address);
		weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
			if(errorMessage){
				console.log(errorMessage);
			}else{
				// console.log(JSON.stringify(weatherresults,undefined,2))
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
			}
		});

		// console.log(JSON.stringify(results, undefined, 2))
	}
});



// request({
// 	url: `https://maps.googledapis.com/maps/api/geocode/json?address=${encodedAddress}`,
// 	json:true
// // when Json come back -->json data
// },(error,response,body) => {
//   // console.log(JSON.stringify(error, undefined, 2));
// 	if(error){
// 		console.log('Unable to connect to Google servers.')
// 	} else if(body.status === 'ZERO_RESULTS'){
//
// 		//  ZERO_RESULTS : from google api
// 		console.log('Unable to find that address.');
// 	} else if(body.status === 'OK'){
// 		console.log(`Address: ${body.results[0].formatted_address}`)
// 		console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
// 	  console.log(`Longitude ${body.results[0].geometry.location.lng}`)
// 	}
//
// });




// secoun is callback function
