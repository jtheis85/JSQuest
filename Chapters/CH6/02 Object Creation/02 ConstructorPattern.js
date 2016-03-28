function Person(age, name, job) {
    this.age = age;
    this.name = name;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person(30, 'Joe', 'Software Engineer');
var person2 = new Person(27, 'Liz', 'Business Development Manager');

// Separate instances with separate properties
console.log(person1.name);
console.log(person2.name);

// Object instance points to constructor
console.log(person1.constructor);
console.log(person2.constructor);
console.log(person2.constructor === person2.constructor); // true

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

// Prototype of instance shows something useful!
console.log(Object.getPrototypeOf(person1)); // Person

// Be careful! doing this outside strict mode adds things GLOBALLY because
// 'this' points to the global object ('window' in a browser environment)
var person3 = Person(27, 'Steve', 'Software Engineer');
console.log('Age is: ' + GLOBAL.age);

// Would cause an error
//'use strict';
//var person5 = Person(27, 'Steve', 'Software Engineer');
//console.log('Age is: ' + GLOBAL.age);


// BUT they get their own copies of functions
console.log(person1.sayName == person2.sayName); // false

function BetterPerson(age, name, job) {
    this.age = age;
    this.name = name;
    this.job = job;
    this.sayName = betterSayName;
}

// This fixes the problem, but the function has to be outside the constructor.
// That might be OK within a module, but not OK in global scope.
function betterSayName() {
    console.log(this.name);
}

var person4 = new BetterPerson(30, 'Joe', 'Software Engineer');
var person5 = new BetterPerson(27, 'Liz', 'Business Development Manager');

// Now they share the function
console.log(person4.sayName == person5.sayName); // true