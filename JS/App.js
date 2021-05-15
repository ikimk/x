gsap.registerPlugin(ScrollTrigger);

//---------------------Parallax---------------------
function Parallax() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".SectionB",
            start: "100% 100%",
            end: () => `+=${document.querySelector("footer").offsetHeight}`,
            scrub: 0,
            // markers: true,
        }
    })
    tl
        .from('footer', {
            y: "-50%", ease: "none",
        }, 0)
}
//---------------------/Parallax---------------------

//---------------------Parallax (max-width: 480px)---------------------
function ParallaxMobile() {
    let tlB = gsap.timeline({
        scrollTrigger: {
            trigger: ".SectionB",
            start: "100% 100%",
            end: () => `+=${document.querySelector("footer").offsetHeight}`,
            scrub: 0,
            // markers: true,
        }
    })
    tlB
        .from('footer', {
            y: "-50%", ease: "none",
        }, 0)
}
//---------------------/Parallax (max-width: 480px)---------------------

window.onload = () => {
    if (window.matchMedia("(max-width: 480px)").matches) {
        ParallaxMobile()
    } else {
        Parallax()
    }
}