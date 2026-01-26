window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrap");
    const background = document.querySelector(".background");

    const MIN_DURATION = 800;

    setTimeout(() => {
        background.classList.add("visible");
        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();

            const nav = document.getElementById("nav");
            const h1 = document.getElementById("h1");
            const text = document.getElementById("text");
            const socials = document.getElementById("socials");
            const elements = [nav, h1, text, socials];
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("visible");
                }, index * 600); //ms
            });
        }, 700);
    }, MIN_DURATION);
});

const pop = document.getElementById("email");
const btn = document.getElementById("email-btn");

btn.addEventListener("click", () => {
  pop.classList.toggle("pop");
});