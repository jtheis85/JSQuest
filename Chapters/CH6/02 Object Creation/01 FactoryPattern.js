// Encapsulate object creation in a function. The downside is there's no type
// identification ala instanceof

function createPerson(age, name, job) {
    return {
        age: age,
        name: name,
        job: job,
        sayName: function() {
            console.log(this.name);
        }
    };
}

var person = createPerson(30, 'Joe', 'Software Developer');
person.sayName();

// Just a plain old object :(
console.log(person instanceof createPerson); // false
console.log(Object.getPrototypeOf(person));