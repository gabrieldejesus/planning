/* ======================================================= MENU ======================================================= */
function menuOpen() {
    document.getElementById('menu-window').style.display = 'flex';
    document.querySelector('aside').style.width = '230px';
}

function menuClosed() {
    document.getElementById('menu-window').style.display = 'none';
    document.querySelector('aside').style.width = '0px';
}
/* ===================================================== DARK MODE ==================================================== */
function changeThemeDark() {
    // Header
    document.querySelector('header').style.background = 'var(--dark-color)'; // background do header
    document.getElementById('open-menu').src = '/public/images/open-menu-light.webp'; // botão de menu lateral
    document.getElementById('search-button').src = '/public/images/search-light.webp'; // icone de pesquisa
    document.getElementById('search').style.borderBottom = '2px solid var(--white-color)'; // barra de pesquisa
    document.getElementById('search').style.color = 'var(--white-color)'; // cor da fonte da barra de pesquisa
    document.querySelector('a').style.color = 'var(--white-color)'; // cor de todos as tags a
    document.getElementById('change-theme-light').style.display = 'none'; // desativar o botão de thema light
    document.getElementById('change-theme-dark').style.display = 'flex'; // ativar o botão de thema dark

    // Main
    document.querySelector('main').style.background = 'var(--dark-color)'; // background do main
    document.getElementById('title').style.color = 'var(--white-color)'; // titulo do main
}