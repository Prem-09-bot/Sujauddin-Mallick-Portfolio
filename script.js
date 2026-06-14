tsParticles.load("particles", {
    particles: {
        number: {
            value: 60
        },

        color: {
            value: "#8b5cf6"
        },

        links: {
            enable: true,
            color: "#8b5cf6",
            distance: 150,
            opacity: 0.3
        },

        move: {
            enable: true,
            speed: 1
        },

        size: {
            value: 2
        },

        opacity: {
            value: 0.5
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            }
        },

        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 0.8
                }
            }
        }
    },

    background: {
        color: "transparent"
    }
});

const text =
"Frontend Developer • AI Enthusiast • Network Simulation Learner";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

typeWriter();