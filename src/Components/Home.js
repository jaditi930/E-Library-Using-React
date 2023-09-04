import Card from './Card'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function Home(){
    const titles=['1st Year','Second Year','Third Year','Fourth Year'];
    let semesters = ["semester1&2","semester3&4","semester5&6","semester7&8"];
  const cards=titles.map((title,index)=>{
    return <Card title={title} key={title} semester={semesters[index]}></Card>
  })
const particlesInit = async (main) => {
    await loadFull(main);
  };
    return (
        <>
    <div id="main_img">
    <img src="./content/images/home.png" alt="" srcSet=""></img>
    </div>
    <div id="particles-js"></div>
    <div id="card_container">
      {cards}
    </div>
    <Particles id="particles-here" init={particlesInit}
    options={{
                    "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
        "particles": {
                      "number": {
                          "value": 700,
                          "density": {
                              "enable": true,
                              "value_area": 1000
                          }
                      },
                      "color": {
                          "value": "#ffffff"
                      },
                      "shape": {
                          "type": "circle",
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
                          "enable": false,
                          "distance": 150,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 1
                      },
                      "move": {
                          "enable": true,
                          "speed": 1,
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
                              "distance": 190,
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
              }  
    }  />
        </>
    )
}