var myBtn = document.getElementById('myBtn');

myBtn.onclick = function(event) {
    alert(event.eventPhase); // 2 - At Target (technically part of bubbling)
};

document.body.addEventListener('click', function(event) {
    alert(event.eventPhase); // 1 - Capturing
}, true);

document.body.onclick = function(event) {
    alert(event.eventPhase); // 3 - Bubbling
};
