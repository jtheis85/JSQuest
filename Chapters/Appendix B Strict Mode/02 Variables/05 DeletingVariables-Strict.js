// In strict mode, deleting variables is an error

'use strict';

var color = "red";

delete color; // SyntaxError: Delete of an unqualified identifier in strict mode

console.log(color); // We never get this far