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

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

function button(p1,p2,btn){
    document.getElementById(btn).addEventListener("click",()=>{
        p1.classList.remove("revealed");
        p1.classList.add("hidden");

        p2.classList.remove("hidden");
        p2.classList.add("revealed");
    })
};

button(card1,card2,"btn1");
button(card2,card1,"btn2");
button(card2,card3,"btn3");
button(card3,card2,"btn4");