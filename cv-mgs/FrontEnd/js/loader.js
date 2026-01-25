window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrap");
    const background = document.querySelector(".background");

    const MIN_DURATION = 1500;

    setTimeout(() => {
        background.classList.add("visible");
        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 700);
    }, MIN_DURATION);
});


