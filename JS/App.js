gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    //Elements
    var card = document.querySelector("#card");

    //MouseMove Event
    $('#wrapper').mousemove(function (e) {
        let x = ((-113 * (window.innerWidth / 2 - e.pageX)) / window.innerWidth / 2);
        let y = ((113 * (window.innerHeight / 2 - e.pageY)) / window.innerHeight / 2);

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}
//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger()
}