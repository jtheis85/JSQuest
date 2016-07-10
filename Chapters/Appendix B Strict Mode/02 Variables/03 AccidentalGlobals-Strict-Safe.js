// In order to safely assign a global variable using strict mode, it must be
// explicitly set on the global object (window)

// Browser version
// window.message = "Hello World";

// Node version
global.message = "Hello World"; // Explicit assignment is allowed

console.log(message); // "Hello World"