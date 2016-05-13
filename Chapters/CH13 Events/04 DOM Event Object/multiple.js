var mybtn = document.getElementById('mybtn');
var handler = function(event) {
    switch (event.type) {
        case 'click':
            alert('clicked');
            break;
        case 'mouseover':
            event.target.style.backgroundColor = 'red';
            break;
        case 'mouseout':
            event.target.style.backgroundColor = '';
            break;
    }
};

mybtn.onclick = handler;
mybtn.onmouseover = handler;
mybtn.onmouseout = handler;