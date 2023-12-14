const timelineBTT1 = gsap.timeline({ paused: true });
const timelineBTT4 = gsap.timeline({ paused: true });

const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

// BTT1, BTT2, BTT3 애니메이션을 수행하는 함수
const animateBTT5 = (item, y) => {
    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
        item,
        {
            autoAlpha: 1,
            y: y,
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );

    if (item.classList.contains("BTT5") && window.innerWidth > 600) {
        timeline.fromTo(
            item,
            {
                x: 0,
            },
            {
                x: 11 + "vw",
                duration: 1.5,
                overwrite: "auto",
                ease: "power2.inOut",
            }
        );
    }

    return timeline;
};

// ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션 실행
gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);

    let animation;
    if (
        item.classList.contains("BTT1") ||
        item.classList.contains("BTT2") ||
        item.classList.contains("BTT3")
    ) {
        animation = animateBTT1_2_3(item, 200);
    } else if (item.classList.contains("BTT4")) {
        animation = animateBTT4(item);
    }

    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        onEnter: () => {
            animation.play();
        },
    });
});
window.addEventListener("resize", function () {
    if (window.innerWidth <= 600) {
        const items = document.querySelectorAll(".BTT5");
        items.forEach((item) => {
            gsap.to(item, {
                x: 0,
                duration: 0.02,
                overwrite: "auto",
                ease: "power2.inOut",
            });
        });
    } else if (window.innerWidth > 600) {
        const items = document.querySelectorAll(".BTT5");
        items.forEach((item) => {
            gsap.to(item, {
                x: 11 + "vw",
                duration: 0.02,
                overwrite: "auto",
                ease: "power2.inOut",
            });
        });
    }
});
