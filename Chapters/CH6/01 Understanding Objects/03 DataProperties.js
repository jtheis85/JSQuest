// Define properties with special attributes using Object.defineProperty

var person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'Joe'
});

console.log(person.name); // 'Joe'
person.name = 'Liz';      // Error if strict mode is on
console.log(person.name); // 'Joe
