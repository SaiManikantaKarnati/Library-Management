var loginDropdown = document.getElementById("login-dropdown");
var userLoginOption = document.getElementById("user-login");
var adminLoginOption = document.getElementById("admin-login");

var animationContainer = document.getElementById('content');
var animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/trial.json'
});

var logoContainer = document.getElementById('logo');
var logoAnimation = lottie.loadAnimation({
    container: logoContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/logo.json'
});

logoContainer.style.width = '80px';
logoContainer.style.height = '80px';