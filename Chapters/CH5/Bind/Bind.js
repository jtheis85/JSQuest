window.color = "red";

var o = { color: "blue" };

function sayColor () {
    alert(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();

sayColor.bind(o)();