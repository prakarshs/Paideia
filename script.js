document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector(".ri-menu-5-fill");
    burger.addEventListener('click', function () {
        console.log("clicked");
        burger.classList.toggle('ri-menu-unfold-fill');
    })

});