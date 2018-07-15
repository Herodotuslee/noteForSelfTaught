const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys           = require('./keys')
//when use new
const User           = require('../models/user-model')


passport.serializeUser((user,done)=>{
  done(null,user.id);
});

///??????????????

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user);
      console.log("Here", user)
  });

});

//???

// to cookie

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken,refreshToken,profile,done) => {
        // Check if user already exists in our db
        User.findOne({googleId:profile.id}).then((currentUser)=>{
          if(currentUser){
            // already have the user
            console.log('user is:', currentUser);
            done(null,currentUser);
            ///??????????????
          } else{
            new User({
              googleId: profile.id,
              username: profile.displayName,
              thumbnail: profile._json.image.url

            }).save().then((newUser) =>{
              ///??????????????
              console.log('new user created:' , newUser);
              done(null,newUser);
              // from passport
            });
            // if not, create user in our db
          }

        })
        // passport callback function
        // console.log('passport callback function fired')
        // console.log(profile);

        // a method
    })
);
