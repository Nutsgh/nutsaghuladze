// // 1

// let  array = [  5, 25, 89, 120, 36] ; 
// array.push ('javascript','python');
// array.unshift ('html' , 'css');
// let length = array.length
// console.log(array.length);

// array.shift();
// array.pop() ;
// console.log (array);



// 2. 

//   let array = [ 'orange' , 'banana' , 'pear']
// //   let length = array.length; 
// // console.log(array.length);

// array.push('apple' , 'pineapple');
// array.unshift('watermelon');
// let length = array.length;
// console.log(array.length);


// array.splice (2,0 ,'mango');
// console.log(array);

// array.shift();
// array.pop(); 
// console.log(array);



// 3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let result = array.map(item => item / 3);
// console.log (result) ;



// 4

// let array = ['hello', 125, 'javascript', 'html', 43, 'css', 'scss', 'bootstrap', 88, 59, 'python'];

// let result = array.filter (value => typeof value ==='number')
// console.log(result);


// 5




// let languages = ['html', 'css', 'javascript', 'python'] ;

// let result = languages.filter (x => x.length > 3)

// console.log(result);



// 6


// let array = ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentValue) { 
//     return accumulator + currentValue
// },

// ''
// );
// console.log(array);





// 7
// let item = [12 , 'google' , 32 , null , 'yahoo' , 25]
 
 
// let result = item.map(item => {
//     if(typeof item == 'number') {
//         return item *item ; 
//     } else if (typeof item == 'string') {
//         return item.toUpperCase(); 
//     } return item;
// })

// console.log(result);

  






// 8



// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let result = words.filter(function(item) {
//     if (item.includes('m') || item.includes ('M') ) {
//         return true;
//     }
//     return false;
// })
// console.log(result); 