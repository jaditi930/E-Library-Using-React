import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {Link} from 'react-router-dom'
export default function SemesterList(){
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    let semesters = [["Semester 1&2", "semester1&2"], ["Semester 3&4", "semester3&4"], ["Semester 5&6", "semester5&6"], ["Semester 7&8", "semester7&8"]];
    let semester_cards=semesters.map((semester)=>{
    return <div className="sem_card"><Link to={semester[1]}>
<div className="sem_card__content"> <div className="sem_card_txt">{semester[0]}</div></div></Link>
</div>

})
    return (
        <>
    <h1 id="sem_main_heading">
        Semester Wise Books
    </h1>
    <div id="sem_card_container">
    <div id="sem_particles-js"></div>
        {semester_cards}
    </div>
    <Particles id="particles-here" init={particlesInit}
    options={{
        "particles": {
            "number": {
                "value": 280,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }}/>
        </>
    )
}