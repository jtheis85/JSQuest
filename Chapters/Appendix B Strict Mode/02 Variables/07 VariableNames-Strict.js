// Using these as variable names is an error in strict mode

'use strict';

var implements = "val"; // SyntaxError: Unexpected strict mode reserved word

console.log(implements); // Never get this far