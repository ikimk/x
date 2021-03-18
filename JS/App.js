gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".landingPage",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "100% 0%",
            // markers: "true",
            // scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
        .from('.landingPage #logo', {
            transform: 'translateY(22px)', opacity: 0, duration: 1.3,
        }, 0)
        .from('.landingPage nav a', {
            opacity: 0, x: "-22%", duration: 1.3, stagger: 0.31,
        }, 0)
        .from('.landingPage section h1', {
            opacity: 0, x: "-22%", duration: 1.3,
        }, 0)
        .from('.landingPage section p', {
            opacity: 0, x: "-22%", duration: 1.3, stagger: 0.31,
        }, 0)
        .from('.landingPage #d', {
            opacity: 0, x: "-22%", duration: 1.3,
        }, 0)
        .from('.landingPage #codeby', {
            opacity: 0, x: "-22%", duration: 1.3,
        }, 0)
}
//---------------------/Landing Page ScrollTrigger---------------------

//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {
    let ProgressBar = gsap.timeline({ // ProgressBar---------------------
        scrollTrigger: {
            trigger: ".landingPage",
            start: "100% 100%",
            end: "1300% 0%",
            // markers: "true",
            scrub: 2.2,
        }
    })
    ProgressBar
        .from('#wrapper #ScrollDown #ProgressBar', {
            height: '0vh',
        }) // ProgressBar---------------------

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
    LandingPageScrollTrigger()
    SliderScrollTrigger()
}

window.onload = () => {
    OnLoad()
}