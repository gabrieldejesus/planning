function menuOpen() {
    document.getElementById('menu-window').style.display = 'flex';
    document.querySelector('aside').style.width = '230px';
}

function menuClosed() {
    document.getElementById('menu-window').style.display = 'none';
    document.querySelector('aside').style.width = '0px';
}