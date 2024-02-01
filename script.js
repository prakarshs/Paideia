document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector(".ri-menu-4-fill");
    burger.addEventListener('click', function () {
        console.log("clicked");
        burger.classList.toggle('ri-menu-unfold-line');
        var nav = document.querySelector("header ul");
        console.log("prakat");
        nav.classList.toggle('nav-toggle');
    })
});

gsap.to("#main",{
    backgroundColor:"#262525",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%", 
        end:"top -85%",
        scrub : 2 
    }
})