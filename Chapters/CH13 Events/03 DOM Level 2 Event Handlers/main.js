var mybtn = document.getElementById('mybtn');

mybtn.addEventListener("click", function() {
    alert('Clicked!');
});

var deadButton = document.getElementById('deadbtn');

deadbtn.addEventListener("click", deadClick);

function deadClick() {
    alert('Dead Click');
}

deadbtn.removeEventListener("click", deadClick);