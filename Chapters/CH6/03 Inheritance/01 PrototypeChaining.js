// Prototype Chaining
//
// Define a super type constructor
function Vehicle() {
    // Define a super type property
    this.speed = '88 mph';
    this.driver = 'Einstein';
    // A reference value for later demonstration of weaknesses...
    this.parts = ['flux-capacitor', 'plutonium'];
}
// Add a method to the super type
// CAN'T USE OBJECT LITERAL (will overwrite the prototype)
Vehicle.prototype.getSpeed = function() {
    return this.speed;
};
Vehicle.prototype.getDriver = function() {
    return this.driver;
};

// Define a sub type constructor
function LandVehicle() {
    // Define a sub type property
    this.wheelCount = 4;
}
// Inherit from the super type
LandVehicle.prototype = new Vehicle();
// Add a method to the sub type
LandVehicle.prototype.getWheelCount = function() {
    return this.wheelCount;
};
// Override a method
LandVehicle.prototype.getDriver = function() {
    return 'Marty';
};

// Instantiate the sub type
var myCar = new LandVehicle();
// Access the super type
console.log(myCar.getSpeed()); // 88mph
// Use an overridden method
console.log(myCar.getDriver()); // Marty
console.log(myCar instanceof LandVehicle); // true
console.log(myCar instanceof Vehicle); // true

// But there are problems! Prototype properties containing reference
// values are shared with ALL INSTANCES!
var docsCar = new LandVehicle();
docsCar.parts.push('Mr. Fusion');
console.log(myCar.parts); // [ 'flux-capacitor', 'plutonium', 'Mr. Fusion' ]
// The property is a reference to the same array
console.log(docsCar.parts === myCar.parts); // true
