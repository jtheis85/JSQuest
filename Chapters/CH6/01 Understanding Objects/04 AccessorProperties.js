// Define accessor properties using the same
// Object.defineProperty syntax as data properties

var book = {
    _year: 2016,
    edition: 1
};

Object.defineProperty(book, 'year', {
    get: function () {
       return this._year;
    },
    set: function(val) {
        if (val > 2016) {
            this._year = val;
            this.edition+= val-2016;
        }
    }
});

book.year = 2017;
console.log(book.edition);
