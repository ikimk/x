gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: ".ImgWrapper",
            // scrub: 1.5,
            scrub: "true",
            markers: "true",
        }
    })
    LandingPageScrollTrigger
        .to('#wrapper #img7', { transform: 'scale(3)', x: "100%", }, 0)
        .to('#wrapper #img6', { transform: 'scale(2.5)', x: "-125%" }, 0)
        .to('#wrapper #img5', { transform: 'scale(1.7)', x: "-35%", y: "-15%", }, 0)
        .to('#wrapper #img4', { transform: 'scale(1.5)', x: "-60%", y: "-30%", }, 0)
        .to('#wrapper #img3', { transform: 'scale(1.5)', x: "10%", y: "-10%", }, 0)
        .to('#wrapper #img2', { transform: 'scale(1.4)', x: "15%" }, 0)
        .to('#wrapper #img1', { transform: 'scale(1.3)', x: "-25%" }, 0)
}
//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger()
}