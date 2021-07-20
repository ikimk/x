gsap.registerPlugin(ScrollTrigger);

function MyWorks() {

    //---------------------MyWorks---------------------
    // MyWorksBGScrollTrigger
    let MyWorksBGScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#MyWorks",
            toggleActions: "play reverse play reverse",
            onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.3),
            start: "0% 70%",
            end: "+=" + (document.querySelector('#ProjectWrap').scrollWidth - window.innerWidth * 0.3),
            // markers: "true",
        }
    })
    MyWorksBGScrollTrigger
        .from('#MyWorks #MyWorksBG h1 .char', {
            opacity: 0, yPercent: 50, duration: 2.2, ease: "power3.out", stagger: 0.13
        }, 0)
    // /MyWorksBGScrollTrigger

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
            .from(ProjectSlidesXO.querySelectorAll("#ProjectImageWrap span "), {
                opacity: 0, duration: 0.013,
            }, 0)
            .from(ProjectSlidesXO.querySelectorAll("#ProjectImageWrap span "), {
                height: 0, ease: "power3.inOut", duration: 1.3,
            }, 0)
            .from(ProjectSlidesXO.querySelectorAll("#ProjectImageWrap span img"), {
                yPercent: -22, scale: 2.2, ease: "power1.inOut", duration: 1.3,
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
}

window.onload = () => {
    MyWorks()
}