// Define properties with special attributes using Object.defineProperty

var person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'Joe'
});

console.log(person.name); // 'Joe'
person.name = 'Liz';      // Error if strict mode is on
console.log(person.name); // 'Joe

person = {};
Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'Joe'
});

console.log(person.name); // 'Joe'
delete person.name;       // Error if strict mode is on
console.log(person.name); // 'Joe


try {
    Object.defineProperty(person, 'name', {
        configurable: true,
        value: 'Joe;'
    });
}
catch (exception) {
    console.log(exception);
}

