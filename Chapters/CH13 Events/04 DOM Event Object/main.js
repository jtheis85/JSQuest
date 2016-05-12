var dom0 = document.getElementById('dom0');
var dom2 = document.getElementById('dom2');

dom0.onclick = function(event) {
  alert(event.type + ' DOM Level 0');
};

dom2.addEventListener('click', function(event) {
   alert(event.type + ' DOM Level 2');
});