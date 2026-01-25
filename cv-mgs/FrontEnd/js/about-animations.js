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
            const title = document.getElementById("title");
            const text = document.getElementById("text");
            const btn = document.getElementById("btn1");
            const elements = [nav, title, text, btn];
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("visible");
                }, index * 500); //ms
            });
        }, 700);
    }, MIN_DURATION);
});