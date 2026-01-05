function createParticle() {
    const particle = document.createElement('div')
    particle.className = 'particle'
            
    const size = Math.random() * 4 + 2
    particle.style.width = size + 'px'
    particle.style.height = size + 'px'
            
    particle.style.left = Math.random() * window.innerWidth + 'px'
    particle.style.top = Math.random() * window.innerHeight + 'px'
            
    const duration = Math.random() * 10 + 10
    const delay = Math.random() * 5
            
    particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`
            
    document.querySelector('.background').appendChild(particle)
}

for (let i = 0; i < 50; i++) {
    createParticle();
}

const style = document.createElement('style');
style.textContent = 
    `@keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }`;
document.head.appendChild(style);