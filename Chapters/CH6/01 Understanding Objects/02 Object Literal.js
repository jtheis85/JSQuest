// Create an object in a concise way using Object Literal syntax

var person = {
    name: 'Joe',
    age: 30,
    job: 'Software Engineer',

    sayName: function () {
        console.log(this.name);
    }
};

person.sayName();