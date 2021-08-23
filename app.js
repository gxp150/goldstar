var vm = new Vue({
    el: "#app",
    components : {
        "markup" : home.homeMarkup,
        "navigation" : navigation.navigationMarkup,
        "mobile-navigation" : navigation.mobileNavigationMarkup
    }
});

// const hamburger = document.getElementById('hamburger');
// const navbar = document.getElementById('navbar');

// hamburger.addEventListener('click', () => {
//     navbar.classList.toggle('show');

// })