const express        = require('express'),
	  	app            = express(),
			authRoutes     = require('./routes/auth-routes'),
			passportSetup  = require('./config/passport-setup'),
			mongoose			 = require('mongoose'),
			keys 					 = require('./config/keys')


// set up view engin
app.set('view engine','ejs')

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{

	console.log('connected to mongodb')
});
// set up authRoutes
app.use('/auth',authRoutes);

//create home route

app.get('/',(req,res)=>{
	res.render('home')


})


app.listen(3000,()=>{
	console.log('app now listening for requests on port 3000')
})
