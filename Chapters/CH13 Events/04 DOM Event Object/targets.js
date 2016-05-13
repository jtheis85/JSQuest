var directTarget = document.getElementById('directtarget');
directTarget.onclick = function(event) {
    alert(event.currentTarget === this);
    alert(event.target === this);
};

document.body.onclick = function(event) {
    alert(event.currentTarget === document.body);
    alert(this === document.body);
    alert(event.target === document.getElementById('indirecttarget'));
}