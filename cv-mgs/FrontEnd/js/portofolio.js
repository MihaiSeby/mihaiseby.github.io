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
            const projectss = document.getElementById("projects");
            const heroh1 = document.getElementById("hero-h1");
            const btn5 = document.getElementById("btn5");
            const btn6 = document.getElementById("btn6");
            const elements = [nav, heroh1, projectss, btn5, btn6];
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("visible");
                }, index * 600); //ms
            });
        }, 700);
    }, MIN_DURATION);
});

const pr1 = document.getElementById("first-project");
const pr2 = document.getElementById("second-project");
const pr3 = document.getElementById("third-project");

const projects = [pr1, pr2, pr3];
let current = 0;

function show(index){
    projects.forEach((p, i) => {
        if(i === index){
            p.classList.remove("ascuns");
            p.classList.add("nothidden");
        } else{
            p.classList.remove("nothidden");
            p.classList.add("ascuns");
        }
    });
}

//inainte
document.getElementById("btn5").addEventListener("click",()=>{
    current = (current + 1) % projects.length;
    show(current);
});
//inapoi
document.getElementById("btn6").addEventListener("click",()=>{
    current = (current - 1 + projects.length) % projects.length;
    show(current);
});

//dots
