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

