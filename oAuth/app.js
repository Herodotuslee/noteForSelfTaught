const express        = require('express'),
	  	app            = express(),
			authRoutes     = require('./routes/auth-routes'),
			profileRoutes     = require('./routes/profile-routes'),
			passportSetup  = require('./config/passport-setup'),
			mongoose			 = require('mongoose'),
			keys 					 = require('./config/keys'),
			cookieSession  = require('cookie-session');
			passport 			 = require('passport');


// set up view engin
app.set('view engine','ejs')

app.use(cookieSession({
	maxAge:24*60*60*1000,
	keys:[keys.session.cookieKey]
}))

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

//???

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{

	console.log('connected to mongodb')
});
// set up authRoutes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});


app.listen(3000,()=>{
	console.log('app now listening for requests on port 3000')
})
