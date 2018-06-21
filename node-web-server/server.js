const express = require('express');
const hbs = require('hbs');
const fs = require('fs')

let app = express();

hbs.registerPartials(__dirname +'/views/partials')
app.set('view engine', 'hbs');
// views is the folder default to use
app.use(express.static(__dirname+'/public'));
// ????????????? __dirname

app.use((req, res, next)=>{
  let now =new Date().toString();
  let log =(`${now}: ${req.method} ${req.url}`)
  console.log(log)
  fs.appendFile('server.log', log +'\n',(err)=>{
    //syntax !
    if(err){
      console.log('Unable to append to server.log.')
    }
  })
  next();
})


app.use((req, res, next) => {
  res.render('maintenance.hbs');
});
// middleware

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
  // return "test"


});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
//absolute path

//handlebars similar with ejs
// hns

// http get request
//  / root
// function to run

// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website'
//   });
// });
app.get('/',  (req,res)=>{
  // res.send('<h1>Hello Express</h1>');
  //Html file
  // res.send({
  //   name:'Albert',
  //   likes:[
  //     'Biking',
  //     'Cooking'
  //   ]
  // }
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage: 'Welcome to my website'
    // currentYear:new Date().getFullYear()
  })
// JSON form express convert knows I am useing JSON, because the content type changed

});

app.get('/about',(req,res) =>{
  // res.send('About Page');
  res.render('about.hbs',{
    pageTitle:'About Page',
    // currentYear: new Date().getFullYear(),
    // welcomeMsg : "Welcome for your visit!!"
  });
  //passing data
  //the view we set up
});

// bad - send back json with errorMessage property

app.get('/bad',(req,res) =>{
  res.send({
    errorMessage:'Unable to handle request'
  });

});

// tool ->Network-> Refresh
app.listen(3000,()=>{
  console.log('Server is up on port 3000')
  //every thing come some clinet
});
