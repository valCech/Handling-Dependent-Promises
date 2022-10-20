/*shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000)
})
}

/*soakTheBeans() expects a bean type string as an argument and returns a promise which resolves
to a boolean indicating whether or not the beans are softened.*/

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, 1000);
  });
}

/*cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise 
which will resolve to a string announcing that dinner is ready.*/

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}

  
module.exports = {shopForBeans, soakTheBeans, cookTheBeans};
