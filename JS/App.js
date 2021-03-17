gsap.registerPlugin(ScrollTrigger);

//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {
    let Slide1 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: ".slide1",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide1",
        }
    })
    Slide1
        .from('.slide1 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide1 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide1 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide1---------------------

    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: ".slide2",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide2",
        }
    })
    Slide2
        .from('.slide2 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide2 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide2 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide2---------------------

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".slide3",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide3",
        }
    })
    Slide3
        .from('.slide3 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide3 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide3 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide3---------------------
}
//---------------------/Slider ScrollTrigger---------------------

function OnLoad() {
    SliderScrollTrigger()
}

window.onload = () => {
    OnLoad()
}