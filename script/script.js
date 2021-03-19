(function () {
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDarkOS = window.matchMedia('(prefers-color-scheme: dark)');

    const changeThema = function(isDarkOS) {
        if (isDarkOS.matches) document.documentElement.setAttribute('theme', 'dark');
        else document.documentElement.setAttribute('theme', 'light');
        isDark = isDarkOS.matches;
        changeThemaIcon(isDark);
    }
    isDarkOS.addListener(changeThema);

    if (localStorage.theme) {
        document.documentElement.setAttribute('theme', localStorage.theme);
        isDark = localStorage.theme == 'dark' ? true : false;
        changeThemaIcon(isDark, false);
    } else {
        changeThemaIcon(isDark);
    }

    document.getElementById('thema').addEventListener('click',function(){
        if (isDark) document.documentElement.setAttribute('theme', 'light');
        else document.documentElement.setAttribute('theme', 'dark');
        isDark = !isDark;
        changeThemaIcon(isDark);
    });
}());

function changeThemaIcon(isDark, saveLocalStFlg=true) {
    if (isDark) document.getElementById('thema').innerHTML = '<i class="fas fa-moon"></i>';
    else document.getElementById('thema').innerHTML = '<i class="far fa-moon"></i>';
    if (saveLocalStFlg) localStorage.theme = isDark ? 'dark' : 'light';
}
