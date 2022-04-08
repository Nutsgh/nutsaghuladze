// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for ( let i = 0; i < array.length;  i++) {
//     let numbers = array[i] ;

//     for (let x = 0; x < numbers.length; x++)
//     {
//         let positive = numbers[x] ;

//         if (positive > 0) {
//             console.log (positive);
//         }
//     }

// }





// let array = [32, 10, 'hello', null, 'hello2', 50 ]; 

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (typeof element == 'number' && element % 5 == 0 ) {
//         console.log(element);
//     }
// }





// 


// function nameFunction( x , z) {
//     console.log(x + z);
// }

// nameFunction(10 , 13);



// function nameFunction( x , z) {
//     return x + z ;
// }

// let result = nameFunction (10 ,13);
// console.log(result);



// let testFunction = function()  {
//     console.log ('hello2')
// }

// testFunction(); 



// let testFunction = () => {
//     console.log('hello1')

// }

// testFunction();


// function sum ( ...args) {
//      let numberSum =0 ;
//      for (let item of args) {
//         //  numberSum = numberSum +item
//         numberSum += item;

//      }

//      console.log(numberSum)
     
// }

// sum (10 , 13, 23 ,43, 64 ,4 , 43 , 53, 6 , 500);



//scope 


//  function outside(x) {
//      function inside() {
//          return x * x;
//      }

//      return inside; 
//  }

//  let i = outside(3) ;
//  let result = i() ; 
//  console.log(result);



// if(true) {
// var x = 5;
// }

// console.log(x);


// let array = [ 12, 25 , 6 ,32];
// array.forEach(function(item)
// {
//     console.log(item);
// })



// let array = [ 'html' , 'css' , 'javascript' , 'python'] ;
// array.forEach(function(item){
//     if(item.length > 5) {
//         console.log(item);
//     }
// })




let array = [ 'html' , 'css' , 'javascript' , 'python']  ; 
// array.push('bootsrtap' , 'hfhfs') ;
// array.unshift('hhh"')
// array.shift();
// array.pop();
array.splice(2,1, 'jgdfd');
console.log(array);