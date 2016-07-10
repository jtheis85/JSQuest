// In non-strict mode, deleting a variable fails silently

var color = "red";

delete color; // fails silently

console.log(color); // "red"