import '../styles/home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ig from "../lib/img/ig.png" 
import ig1 from "../lib/img/ig1.png" 
import ig2 from "../lib/img/ig2.png" 
import ig3 from "../lib/img/ig3.png" 
import ig4 from "../lib/img/ig4.png" 
import ig5 from "../lib/img/ig5.png" 
import ig6 from "../lib/img/ig6.png" 
import teus1 from "../lib/img/teus1.png" 
import video1 from "../lib/img/video1.mp4" 

// import WhatsAppWidget from "react-whatsapp-widget";
// import "react-whatsapp-widget/dist/index.css";

const Home = () => {
  // animacion scroll
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  //flechas scroll
   
  let hasScrolled = false; // Bandera para verificar si el usuario ha hecho scroll

  window.addEventListener('scroll', () => {
      const indicator = document.querySelector('.scroll-indicator');

      if (!hasScrolled && window.scrollY > 50) { 
          // Desaparece cuando el usuario baja
          indicator.style.opacity = '0';
          indicator.style.visibility = 'hidden';
          hasScrolled = true; // Evita que vuelva a mostrarse
      }
  });

    return (
      <div className="contenedor">
        <div className="section-1">

          <div className="black">
          </div>
          <div data-aos="fade-up" className="title">
            <h1>CVDP</h1>
            <div className="gradient">
            </div>
            <h2>QUERÉTARO</h2>
            <p>Somos el Centro de Vinculación y Desarrollo Profesional del Tecnológico de Monterrey Campus Qro. </p>
            <div  className="scroll-indicator">
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-chevron-down"></i>
                
            </div>
          </div>
          {/* <WhatsAppWidget phoneNumber="1234567890" message="¡Hola! ¿Cómo puedo ayudarte?" /> */}
        </div>
        <div className="section-2">
          <div className="contenedor-about">
            <div className="about">
              <p>Nos dedicamos a la <span>vinculación de alumnos</span> con organizaciones, 
                instituciones públicas y privadas, asociaciones, etc; para contribuir 
                y complementar la <span>formación profesional.</span> Además contamos con la bolsa de 
                trabajo en línea para <span>prácticas/estancias profesionales y empleo.</span>
              </p>
            </div>
            <div className="about">
              <p>Te acompañamos a través de asesoría personalizada y de 
                  talleres de preparación para tu vida laboral así como
                  semanas TEC, reclutamientos y sesiones informativas con
                  empresas, así como la feria de oportunidades de empleo:
                  EMPLEATEC que te permitirán conocer y ofertar tu talento. </p>
            </div>
          </div>
          <div className="instagram">
            <div className="photos">
              <div className="follow">
                <img src={ig} alt="ig" />
                <a href="https://www.instagram.com/cvdp_queretaro/" className='user'>@cvdp_queretaro</a>
                <a href="https://www.instagram.com/cvdp_queretaro/" className='followButton'>FOLLOW</a>
              </div>
              <div className="igImg">
                <div className="bin"><a href=""><img src={ig1} alt="" /></a></div>
                <div className="bin"><a href=""><img src={ig2} alt="" /></a></div>
                <div className="bin"><a href=""><img src={ig3} alt="" /></a></div>
                <div className="bin"><a href=""><img src={ig4} alt="" /></a></div>
                <div className="bin"><a href=""><img src={ig5} alt="" /></a></div>
                <div className="bin"><a href=""><img src={ig6} alt="" /></a></div>
              </div>
            </div>
            <div className="info">
              <p>¡Síguenos en nuestras Redes Sociales para enterarte de todos los eventos, talleres y ofertas laborales que tenemos para ti!</p>
              <img src={teus1} alt="" />
            </div>
          </div>
          <div className="video">
              <video width="100%" controls>
                <source src={video1}type="video/mp4" />
                Tu navegador no soporta el video.
              </video>

            </div>
        </div>
      </div>
    );
  };
  
  export default Home;