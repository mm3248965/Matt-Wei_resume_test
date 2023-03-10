const themes = [
    {
        name: 'dark',
        scheme: {
            '--background-color':'dark'
        }
    },
    {
        name: 'light',
        scheme: {
            '--background-color':'white'
        }
    }
];
let currentTheme = 0;
window.nextTheme = function () {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];
    Object.keys(theme.scheme).forEach(name => {
        const value = theme.scheme[name];
        console.log('a',name, value)
        document.documentElement.style.setProperty(name, value);
    });
}