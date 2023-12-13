const timelineBTT1 = gsap.timeline({ paused: true });
const timelineBTT4 = gsap.timeline({ paused: true });

const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

// BTT1, BTT2, BTT3 애니메이션을 수행하는 함수
const animateBTT1_2_3 = (item, y) => {
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

    if (item.classList.contains("BTT1")) {
        const xDistance = () => {
            let x = 0;
            if (window.innerWidth >= 1720) {
                x = window.innerWidth * 0.007 + "rem";
            } else if (window.innerWidth <= 1700) {
                x = window.innerWidth * 0.008 + "rem";
            } else if (window.innerWidth <= 1580) {
                x = window.innerWidth * 0.0085 + "rem";
            } else if (window.innerWidth <= 1400) {
                x = window.innerWidth * 0.001 + "rem";
            } else if (window.innerWidth <= 1280) {
                x = window.innerWidth * 155 + "px";
            }
            //  else if (window.innerWidth >= 980) {
            //     x = window.innerWidth * 0.015 + "rem";
            // } else if (window.innerWidth <= 780) {
            //     x = window.innerWidth * 0.2 + "rem";
            // }

            return x;
        };

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

const animateBTT4 = (item) => {
    timelineBTT4.fromTo(
        item,
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 5.5,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );

    return timelineBTT4;
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
