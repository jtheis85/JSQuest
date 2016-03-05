// Create an object in a simple way using "new" to create a new instance, then
// directly defining properties and methods on it

var person = new Object();
person.name = "Joe";
person.age = 30;
person.job = "Software Engineer";

person.sayName = function () {
    console.log(this.name);
};

person.sayName();