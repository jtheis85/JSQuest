// Use Object.defineProperties to conveniently create more than one property at a time
"use strict";

var book = {};

Object.defineProperties(book, {
    _year: { value: 2016, writable: true },
    edition: { value: 1, writable: true },
    year: {
        get: function() {
            return this._year;
        },
        set: function(val) {
            if(val > 2016) {
                this._year = val;
                this.edition += val - 2016;
            }
        }
    }
});

console.log(book.year + ' ' + book.edition);
book.year = book.year + 1;
console.log(book.year + ' ' + book.edition);

// Use Object.getOwnPropertyDescriptor to get the property descriptor of a property
// on an object. The property must be on the object instance directly, not the
// prototype chain

console.log(Object.getOwnPropertyDescriptor(book, "_year"));
console.log(Object.getOwnPropertyDescriptor(book, "edition"));
console.log(Object.getOwnPropertyDescriptor(book, "year"));