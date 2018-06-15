const  request   =  require('request');

var geocodeAddress =(address,callback)=>{


  // var encodedAddress =encodeURIComponent(argv.address);
   var encodedAddress =encodeURIComponent(address);
  request({
  	url: `https://maps.googledapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  	json:true
  // when Json come back -->json data
  },(error,response,body) => {
    // console.log(JSON.stringify(error, undefined, 2));
  	if(error){
      callback('Unable to connect to Google servers.')
  		// console.log('Unable to connect to Google servers.')
  	} else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address.')
  		//  ZERO_RESULTS : from google api
  		// console.log('Unable to find that address.');
  	} else if(body.status === 'OK'){
      callback(undefined,{
        address:body.results[0].formatted_add ,
        lattitude :body.results[0].geometry.location.lat,
        longitude : body.results[0].geometry.locaton.lng
      });
  		// console.log(`Address: ${body.results[0].formatted_address}`)
  		// console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  	  // console.log(`Longitude ${body.results[0].geometry.location.lng}`)
  	}

  });



};

module.exports.geocodeAddress = geocodeAddress
