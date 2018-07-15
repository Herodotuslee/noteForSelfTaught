console.log('Starting app');

/// provide by node
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);
// callback function

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

// printed after run all the code

console.log('Finishing up');

//remove line by line
//call stack only do one thing at a time
//we can't run the callback before the call stack complete
