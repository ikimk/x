gsap.registerPlugin(ScrollTrigger, Draggable);

$("body").dblclick(function () {
    document.documentElement.style.setProperty('--ColorLight1', "#0d0d0d");
    document.documentElement.style.setProperty('--ColorLight2', "#121212");
    document.documentElement.style.setProperty('--ColorLight3', "#1f1f1f");
    document.documentElement.style.setProperty('--ColorDark3', "#e3e3e3");
    document.documentElement.style.setProperty('--ColorDark2', "#ebebeb");
    document.documentElement.style.setProperty('--ColorDark1', "#f2f2f2");
    $("#HomePage").css({ 'background': 'url(./img/HiThereWhite.jpg) var(--ColorDark2) no-repeat center', 'backgroundSize': '100vw', });
    $("#MyWorks").css({ 'background': 'url(./img/MyWorksWhite.jpg) var(--ColorDark2) no-repeat center', 'backgroundSize': '100vw', });
    $("#ContactMe").css({ 'background': 'url(./img/ContactMeWhite.jpg) var(--ColorDark2) no-repeat center', 'backgroundSize': '100vw', });
    $("#FiverrIcon img").attr("src", "Icon/FiverrBlack.svg");
    $("#BehanceIcon img").attr("src", "Icon/BehanceBlack.svg");
    $("#CodepenIcon img").attr("src", "Icon/CodepenBlack.svg");
    $("#GithubIcon img").attr("src", "Icon/GithubBlack.svg");
});

//---------------------App---------------------
function App() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    //---------------------HomePage---------------------
    // HomePageParallax---------------------
    let HomePageParallax = gsap.timeline({
        scrollTrigger: {
            trigger: "#HomePage",
            start: "0% 0%",
            end: () => `+=${document.querySelector("#HomePage").offsetHeight}`,
            scrub: 0,
            // markers: true,
        }
    })
    HomePageParallax
        .to('#HomePage>*', {
            // x: "50%", ease: "none", rotate: "22deg",
        }, 0)
        .to('#HomePage', {
            backgroundSize: '80vw', ease: "none",
        }, 0)
        .from('#MyWorks', {
            backgroundSize: '80vw', ease: "none",
        }, 0)
    // /HomePageParallax---------------------
    //---------------------/HomePage---------------------

    //---------------------MyWorks---------------------
    // MyWorksDraggableTL---------------------
    Draggable.create("#ProjectWrap", {
        onPress: function () { MyWorksDraggableTL.play(); },
        onRelease: function () { MyWorksDraggableTL.reverse(); },
        bounds: "#MyWorks",
        type: "x",
        // cursor: "default",
        // activeCursor: "default",
    });
    var MyWorksDraggableTL = gsap.timeline();
    MyWorksDraggableTL.to('#ProjectSlide>*', {
        y: "-10%", duration: 0.2,
    }, 0)
    MyWorksDraggableTL.pause();
    // /MyWorksDraggableTL---------------------

    // MyWorksParallax---------------------
    let MyWorksParallax = gsap.timeline({
        scrollTrigger: {
            trigger: "#MyWorks",
            start: "0% 0%",
            end: () => `+=${document.querySelector("#MyWorks").offsetHeight}`,
            scrub: 0,
            // markers: true,
        }
    })
    MyWorksParallax
        .to('#MyWorks>*', {
            // x: "-50%", ease: "none", rotate: "22deg",
        }, 0)
        .to('#MyWorks', {
            backgroundSize: '80vw', ease: "none",
        }, 0)
        .from('#ContactMe', {
            backgroundSize: '80vw', ease: "none",
        }, 0)
    // /MyWorksParallax---------------------
    //---------------------/MyWorks---------------------
}
//---------------------/App---------------------

window.onload = () => {
    App()
}