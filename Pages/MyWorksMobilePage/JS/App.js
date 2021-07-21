gsap.registerPlugin(ScrollTrigger);

//---------------------PageAnimation---------------------
function PageAnimation() {
    //---------------------MyWorks---------------------
    // MyWorksTL---------------------
    let MyWorksTL = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.3, } });
    MyWorksTL
        .from("#MyWorks #MyWorksTitle h1 .word", {
            yPercent: 100, stagger: 0.13,
        }, 0)
        .from("#MyWorks #ProjectSlide #ProjectTitle h4 .word", {
            yPercent: 100, stagger: 0.061,
        }, 0.31)
        .from("#MyWorks #ProjectSlide #ProjectTitle h2 .char", {
            yPercent: 100, stagger: 0.031,
        }, 0.31)
    // /MyWorksTL---------------------
    //---------------------/MyWorks---------------------
}
//---------------------/PageAnimation---------------------

window.onload = () => {
    PageAnimation()
}