

// let salaries = {
//     John: 0,
//     Ann: 0,
//     Pete: 0
// }

// let sum = 0;

// for (let value of Object.values(salaries)) {
//   sum += value;
// }

// console.log(sum); 


//============================================2


// let user = {
//     name: 'John',
//     surname: 'Smith'
// }
// user.name = 'Pete'
// delete user.name

// console.log(user);

//============================================3


// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
//   }
 
//   for (let i in menu) {
    
//     if(typeof menu [i] === 'number') {
//       menu[i] = menu[i] * 2
//     }
//   }
  
//   console.log(menu);



//=========================================4

let obj = {
    name: 'book'
}

let getLength = (obj) => {
    let name = Object.keys(obj);
    if(name.length) {
        console.log('This is not empty');
    }else {
        console.log('This is empty')
    }
}
getLength(obj)