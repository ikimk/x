gsap.registerPlugin(ScrollTrigger);

document.documentElement.style.setProperty('--ColorLight1', "#0d0d0d");
document.documentElement.style.setProperty('--ColorLight2', "#121212");
document.documentElement.style.setProperty('--ColorLight3', "#1f1f1f");
document.documentElement.style.setProperty('--ColorDark3', "#e3e3e3");
document.documentElement.style.setProperty('--ColorDark2', "#ebebeb");
document.documentElement.style.setProperty('--ColorDark1', "#f2f2f2");

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
            // markers: true,
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