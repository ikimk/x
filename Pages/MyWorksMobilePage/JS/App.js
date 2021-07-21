gsap.registerPlugin(ScrollTrigger);

//---------------------PageAnimation---------------------
function PageAnimation() {
    //---------------------MyWorksX---------------------
    // MyWorksXTL---------------------
    let MyWorksXTL = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.3, },
        scrollTrigger: {
            trigger: "#HomePage",
            toggleActions: "play reverse play reverse",
            onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.3),
            start: "0% 13%",
            end: "100% 13%",
            // markers: "true",
        }
    })
    MyWorksXTL
        .from("#MyWorksX #MyWorksXTitle h1 .word", {
            yPercent: 100, stagger: 0.13,
        }, 0)
        .from("#MyWorksX #MyWorksXTitle", {
            yPercent: 82,
        }, 0)
        .from("#MyWorksX #ProjectSlide", {
            yPercent: 220, stagger: 0.13,
        }, 0)
        .from("#MyWorksX #ProjectSlide #ProjectTitle h4 .word", {
            yPercent: 100, stagger: 0.061,
        }, 0.31)
        .from("#MyWorksX #ProjectSlide #ProjectTitle h2 .char", {
            yPercent: 100, stagger: 0.031,
        }, 0.31)
    // /MyWorksXTL---------------------
    //---------------------/MyWorksX---------------------
}
//---------------------/PageAnimation---------------------

window.onload = () => {
    PageAnimation()
}