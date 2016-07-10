// With Strict Mode, assigning global variables this way is illegal

"use strict";

message = "Hello World"; // ReferenceError: message is not defined

console.log(message); // Never get this far