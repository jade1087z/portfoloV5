{
    document.querySelectorAll(".split").forEach((text) => {
        let theText = text.innerText;
        let newText = "";

        for (let i = 0; i < text.innerText.length; i++) {
            newText += "<span aria-hidden='true'>";

            if (text.innerText[i] == " ") {
                newText += "&nbsp";
            } else {
                newText += text.innerText[i];
            }

            newText += "</span>";
        }

        text.innerHTML = newText;
        text.setAttribute("aria-label", theText);
    });
    gsap.utils.toArray(".split").forEach((text) => {
        gsap.from(
            text.querySelectorAll("span"),
            {
                yPercent: 100,
                autoAlpha: 0,
                duration: 1,
                ease: "circ.out",
                stagger: {
                    amount: 1,
                    from: "random",
                },
                scrollTrigger: {
                    trigger: text,
                    start: "top bottom",
                    end: "+400",
                    markers: true,
                },
            },
            {}
        );
    });
}
