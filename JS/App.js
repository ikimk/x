gsap.registerPlugin(ScrollTrigger);

$("body").dblclick(function () {
    document.documentElement.style.setProperty('--ColorLight1', "#0d0d0d");
    document.documentElement.style.setProperty('--ColorLight2', "#121212");
    document.documentElement.style.setProperty('--ColorLight3', "#1f1f1f");
    document.documentElement.style.setProperty('--ColorDark3', "#e3e3e3");
    document.documentElement.style.setProperty('--ColorDark2', "#ebebeb");
    document.documentElement.style.setProperty('--ColorDark1', "#f2f2f2");
    $("#FiverrIcon img").attr("src", "Icon/FiverrBlack.svg");
    $("#BehanceIcon img").attr("src", "Icon/BehanceBlack.svg");
    $("#CodepenIcon img").attr("src", "Icon/CodepenBlack.svg");
    $("#GithubIcon img").attr("src", "Icon/GithubBlack.svg");
});

//---------------------App---------------------
function App() {

    //---------------------PageLoadingAnimation---------------------
    function PageLoadingAnimation() {
        $('#PageLoadingAnimation').animate({
            'animationPlayState': 'paused',
            "opacity": "0",
        }, 400);
        $('#PageLoadingAnimation').css({
            "display": "none",
        }, 400);
        //---------------------Enablescrolling---------------------
        $("body").css("overflow", "scroll");
        //---------------------LandingPageSCrollSnap---------------------
        $('html, body').animate({
            scrollTop: $("#HomePage").offset().top
        }, 400);
    }
    //---------------------/PageLoadingAnimation---------------------

    //---------------------HomePage---------------------
    let HomePageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#HomePage",
            toggleActions: "play reverse play reverse",
            onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.3),
            start: "0% 13%",
            end: "100% 70%",
            // markers: "true",
        }
    })
    HomePageScrollTrigger
        .from('#HomePage #HiThere h1 .char', {
            opacity: 0, yPercent: 50, duration: 2.2, ease: "power3.out", stagger: 0.13
        }, 0)
        .from('#HomePage #intro h2 span .char', {
            opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2, stagger: 0.13,
        }, 0.5)
        .from('#HomePage #intro h5 span .word', {
            opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2, stagger: 0.13
        }, 1.5)
        .from('#HomePage #logo h3', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2,
        }, 3)
        .from('#HomePage nav li a', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2, stagger: 0.31,
        }, 3)
        .from('#HomePage #social a span', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2, stagger: 0.31,
        }, 3)
        .from('#HomePage #codeby p', {
            opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2, stagger: 0.31,
        }, 3)
        .from('#HomePage #scrolldown span p', {
            opacity: 0, yPercent: 100, ease: 'power2.out', duration: 2.2,
        }, 3)
    //---------------------/HomePage---------------------

    //---------------------MyWorks---------------------
    // MyWorksScrollTrigger
    let MyWorksScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#MyWorks",
            toggleActions: "play reverse play reverse",
            onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.3),
            start: "0% 70%",
            end:  "+=" + (document.querySelector('#ProjectWrap').scrollWidth - window.innerWidth * 0.3),
            // markers: "true",
        }
    })
    MyWorksScrollTrigger
        .from('#MyWorks #MyWorksBG h1 .word', {
            opacity: 0, yPercent: 50, duration: 2.2, ease: "power3.out", stagger: 0.13
        }, 0)
    // /MyWorksScrollTrigger

    // ProjectWrapHorizontalScroll
    let ProjectSlides = gsap.utils.toArray(".ProjectSlides");

    let ProjectWrapHorizontalScroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#ProjectWrap",
            pin: "#MyWorks",
            start: "0% 0%",
            end: "+=" + (document.querySelector('#ProjectWrap').scrollWidth - window.innerWidth),
            scrub: 1.3,
            snap: {
                snapTo: 1 / (ProjectSlides.length - 1),
                duration: { min: 0.13, max: 0.22 },
                delay: 0,
                ease: "power3.out"
            },
            // markers: "true",
        }
    })
    ProjectWrapHorizontalScroll
        .to(ProjectSlides, {
            xPercent: -100 * (ProjectSlides.length - 1),
            ease: "none",
        })
    // /ProjectWrapHorizontalScroll

    // ProjectSlidesAnimation
    let ProjectSlidesX = gsap.utils.toArray(".ProjectSlides");
    ProjectSlidesX.forEach(function (ProjectSlidesXO, i) {
        let ProjectTLAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: ProjectSlidesXO,
                start: () => "top top-=" + (ProjectSlidesXO.offsetLeft - window.innerWidth * 0.2),
                end: () => "+=" + (ProjectSlidesXO.offsetWidth - window.innerWidth * 0.6),
                toggleActions: "play play play reverse",
                // start: () => "top top-=" + (ProjectSlidesXO.offsetLeft - window.innerWidth),
                // end: () => "+=" + (ProjectSlidesXO.offsetWidth),
                // scrub: 1.5,
                // markers: "true",
            }
        })
        ProjectTLAnimation
            .from(ProjectSlidesXO.querySelectorAll("h4 span .word"), {
                yPercent: 130, opacity: 0, duration: 1.3, ease: "power3.out", stagger: 0.13,
            }, 0)
            .from(ProjectSlidesXO.querySelectorAll("h2 span .char"), {
                yPercent: 220, opacity: 0, ease: "power3.out", duration: 1.3, stagger: 0.13,
            }, 0)
            .from(ProjectSlidesXO.querySelectorAll("#ProjectImageWrap img"), {
                yPercent: 220, opacity: 0, duration: 1.3, ease: "power3.out",
            }, 0)
            .from(ProjectSlidesXO.querySelectorAll("#ViewCode"), {
                yPercent: 113, opacity: 0, duration: 1.3, ease: "power3.out",
            }, 0.8)
            .from(ProjectSlidesXO.querySelectorAll("#ViewPage"), {
                yPercent: 113, opacity: 0, duration: 1.3, ease: "power3.out",
            }, 0.93)
    });
    // /ProjectSlidesAnimation
    //---------------------/MyWorks---------------------

    //---------------------Contact Me---------------------
    let ContactMeScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ContactMe",
            toggleActions: "play reverse play reverse",
            onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.3),
            start: "0% 70%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    ContactMeScrollTrigger
        .from('#ContactMe #ContactMeBG h1 .word', {
            opacity: 0, yPercent: 50, duration: 2.2, ease: "power3.out", stagger: 0.13
        }, 0)
        .from('#ContactMe section h3 span .char', {
            opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2, stagger: 0.13,
        }, 0.5)
        .from('#ContactMe section h4 span .word', {
            opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2, stagger: 0.13
        }, 1.5)
        .from('#ContactMe #logo a span', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2,
        }, 3)
        .from('#ContactMe #EmailPhoneNoSocial #EmailnPhoneNoBorderTop', {
            width: 0, ease: 'power2.out', duration: 2.2,
        }, 3)
        .from('#ContactMe #EmailPhoneNoSocial p a span', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2, stagger: 0.31,
        }, 3)
        .from('#ContactMe #social a span', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2, stagger: 0.31,
        }, 3.5)
        .from('#ContactMe #address #AddressBorderTop', {
            width: 0, ease: 'power2.out', duration: 3.5,
        }, 3)
        .from('#ContactMe #address p span .word', {
            opacity: 0, yPercent: 100, ease: 'power3.out', duration: 2.2, stagger: 0.31,
        }, 3.5)
    //---------------------/Contact Me---------------------

    //---------------------ParallaxAnimation---------------------
    let HomePageParallax = gsap.timeline({ // HomePage/MyWorksParallax---------------------
        scrollTrigger: {
            trigger: "#HomePage",
            start: "0% 0%",
            end: () => `+=${document.querySelector("#HomePage").offsetHeight}`,
            scrub: 0,
            // markers: true,
        }
    })
    HomePageParallax
        .to('#HomePage #HiThere h1', {
            y: "22%", ease: "none",
        }, 0)
        .from('#MyWorks #MyWorksBG h1', {
            y: "-22%", ease: "none",
        }, 0) // /HomePage/MyWorksParallax---------------------
    let MyWorksParallax = gsap.timeline({ // MyWorks/ContactMeParallax---------------------
        scrollTrigger: {
            trigger: "#ContactMe",
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
        }
    })
    MyWorksParallax
        .to('#MyWorks #MyWorksBG h1', {
            yPercent: 22, ease: "none",
        }, 0)
        .from('#ContactMe #ContactMeBG h1', {
            yPercent: -22, ease: "none",
        }, 0) // /MyWorks/ContactMeParallax---------------------
    //---------------------/ParallaxAnimation---------------------

    PageLoadingAnimation()
}
//---------------------/App---------------------

window.onload = () => {
    App()
}