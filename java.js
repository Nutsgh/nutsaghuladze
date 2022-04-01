


let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
};

console.log(user.studentstatus);





let numbers = [2, 15, 56, 75, 89, 23, 11, 7];

for (let x = 0; x < 8; x++) {
    console.log(numbers[x])
};


for (let x of numbers) {
    console.log(x)
}


let x = 0;
while( x < numbers.length) {
    console.log(numbers[x]);
    x++;
};



let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x of numbers) {
    if (x >5) {
        console.log(x);
    }
}




let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

for (let x of user) { 
    if ( x.age == 18 && x.studentstatus == active ) {
        console.log('hello');
    }

    else if ( x.name == giorgi ) {
        console.log('hello giorgi');
    }

    else if ( x.age <25 || x.studentstatus == active ) {
        console.log('hello world');
    
    }

    else {
        console.log('error');
    }
}





let array = [ watermelon, pear, 10, 45, 50, 'apple', 'ananas'];


for (let x of array) {
    if (typeof x === 'string') {
        console.log(x);
    }
}







let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]







let array = [32, 10, 'hello', null, 'hello2', 50 ];
for (let x of array) {
    if ( x % 5 == 0 ) {
        console.log(X);
    }
}