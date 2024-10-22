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
    document.getElementById('change-theme-light').style.display = 'none'; // desativar o botão de thema light
    document.getElementById('change-theme-dark').style.display = 'flex'; // ativar o botão de thema dark
    document.getElementById('open-menu').src = '/public/images/open-menu-light.webp'; // botão de menu lateral
    document.getElementById('search-button').src = '/public/images/search-light.webp'; // icone de pesquisa
    document.getElementById('search').style.borderBottom = '2px solid var(--white-color)';
    document.getElementById('search').style.color = 'var(--white-color)';
    document.querySelector('header').classList.add('dark-color');
    document.querySelector('a').classList.add('dark-color');
    
    // Main
    document.querySelector('main').classList.add('dark-color');
    document.getElementById('title').style.color = ('var(--white-color)');
    document.getElementById('widget-body').classList.add('black-color');
    document.getElementById('copy').style.color = ('var(--white-color)');
    document.querySelector('footer').classList.add('dark-color');
    document.getElementById('menu-window').style.background = ('#FFFFFF33');
    document.querySelector('aside').classList.add('dark-color');
    document.getElementById('menu-option').classList.add('dark-color');
}

function changeThemeLight() {
    // Header
    document.getElementById('change-theme-light').style.display = 'flex'; // ativar o botão de thema light
    document.getElementById('change-theme-dark').style.display = 'none'; // desativar o botão de thema dark
    document.getElementById('open-menu').src = '/public/images/open-menu.webp'; // botão de menu lateral
    document.getElementById('search-button').src = '/public/images/search.webp'; // icone de pesquisa
    document.getElementById('search').style.borderBottom = '';
    document.getElementById('search').style.color = '';
    document.querySelector('header').classList.remove('dark-color');
    document.querySelector('a').classList.remove('dark-color');
    
    // Main
    document.querySelector('main').classList.remove('dark-color');
    document.getElementById('title').style.color = ('');
    document.getElementById('widget-body').classList.remove('black-color');
    document.getElementById('copy').style.color = ('');
    document.querySelector('footer').classList.remove('dark-color');
    document.getElementById('menu-window').style.background = ('');
    document.querySelector('aside').classList.remove('dark-color');
    document.getElementById('menu-option').classList.remove('dark-color');
}