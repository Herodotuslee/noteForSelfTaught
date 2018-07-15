const expect =require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  // throw new Error('value not correct')
  expect(res).toBe(44).toBeA('number');

  // if(res !==44){
  //   throw new Error(`Expected 44, but got ${res}.`)
  // }
});

it('should async add two numbers',(done)=>{
  utils.asyncAdd(4,3,(sum)=>{
    expext(sum).toBe(10).toBeA('number');
    done();
  })
})

//from moucha it = function
//behavior driven devel??

it('should square a number',()=>{
  var res=utils.square(3);
  // if(res!==9){
  //   throw new Error(`Expect 9,but got ${res}.`);
  // }
  expect(res).toBe(9).toBeA('number')
})


// it('should expect some values', ()=>{
//   // expect(12).toNotBe(12);
//   // expect({name:"Andrew"}).toNotEqual({name:'Andrew!'})
//   // expect([2,3,4]).toExclude(5)
//
// });


//should verify first and last names are set
//assert it includes firstName and lastName with proper values


it('should se firstName and lastName',()=>{
  var user = {location:'Taiwan',age:25}
  var res=utils.setName(user,'Albert Lee');
  expect(res).toInclude({
    firstName:'Albert',
    lastName :'Lee'
  })

  // if(res!==9){
  //   throw new Error(`Expect 9,but got ${res}.`);
  // }
  expect(user).toEqual(res)
})
