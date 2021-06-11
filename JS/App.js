gsap.registerPlugin(ScrollTrigger);

//---------------------App---------------------
function App() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#HomePage",
            start: "0% 0%",
            end: "100% 0%",
            scroller: "#wrap",
            scrub: 0,
            //markers: true,
        }
    })
    tl
        .to('#HomePage>*', {
            y: "-31%", ease: "none",
        }, 0)
        .to('#HomePage', {
            backgroundSize: '90vw', ease: "none",
        }, 0)
        .from('#wrapX', {
            y: "-50%", backgroundSize: '90vw', ease: "none",
        }, 0)

}
//---------------------/App---------------------

window.onload = () => {
    App()
}