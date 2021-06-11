gsap.registerPlugin(ScrollTrigger);

//---------------------App---------------------
function App() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let GSAPScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#wrapper",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "50% 0%",
            // markers: "true",
        }
    })
    GSAPScrollTL
        .from('#wrapper #logo', {
            opacity: 0, y: "22%", duration: 1.3, ease: "sine.inOut",
        }, 0)

}
//---------------------/App---------------------

window.onload = () => {
    App()
}