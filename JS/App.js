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

window.onload = () => {
    if (window.matchMedia("(max-width: 480px)").matches) {
    } else {
        Parallax()
    }
}