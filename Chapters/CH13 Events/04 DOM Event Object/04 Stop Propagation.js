var btnWith = document.getElementById('btnWith');
var btnWithout = document.getElementById('btnWithout');

document.body.onclick = function(event) {
    alert('Body Clicked');
};

btnWith.onclick = function(event) {
    alert('Button Clicked');
    event.stopPropagation();
};

btnWithout.onclick = function(event) {
    alert('Button Clicked');
};