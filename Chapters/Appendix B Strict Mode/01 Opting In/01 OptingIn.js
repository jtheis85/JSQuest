// Opting In

// To opt a whole file in to Strict Mode, use the strict mode pragma outside
// of a function.

"use strict";

// The syntax is the same as an unassigned string literal. This ensures that
// it won't break older browsers, which merely see the unassigned literal and
// ignore it.

// NOTE! Be careful with top-level strict mode pragmas. If the file they are
// in is concatenated with anything else, the whole bundle becomes strict mode.

// To selectively opt in a single function, use the pragma within the function
// body.

function doSomething() {
    "use strict";
    // Do other stuff
}