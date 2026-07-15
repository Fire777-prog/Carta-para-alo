import { useState } from "react";
import "./App.css";

import foto1 from "./assets/images/foto1.jpeg";
import foto2 from "./assets/images/foto2.jpeg";
import foto3 from "./assets/images/foto3.jpeg";
import foto4 from "./assets/images/foto4.jpeg";
import foto5 from "./assets/images/foto5.jpeg";
import foto6 from "./assets/images/foto6.jpeg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      {/* Estrellas */}
      <div className="star star1">✦</div>
      <div className="star star2">✦</div>
      <div className="star star3">✦</div>
      <div className="star star4">✦</div>


      {!open ? (

        <div className="card">

          <div className="cloud">
            ☁️
          </div>

          <div className="big-stars">
            ✨ 🌙 ✨
          </div>


          <h1>
            Para Alo ❤️
          </h1>


          <p>
             Hice este pequeño lugar para ti,
  con mucho cariño y pensando algunas cosas que pasamos.
          </p>


          <button onClick={() => setOpen(true)}>
            Abrir carta 💌
          </button>


          <div className="flowers">
            🌸 🌹 🌸
          </div>


        </div>


      ) : (


        <>

          {/* Carta */}

          <section className="letter">


            <div className="letter-decoration">
              🌸 ☁️ 🌸
            </div>


            <h2>
              Alo ❤️
            </h2>


            <div className="letter-text">


              <p>
                Quería hacerte este pequeño lugar porque hay cosas que siento
                y que me gusta expresar de una forma diferente.
              </p>


              <p>
                Desde que estas conmigo en mi vida has hecho que muchos de mis días
                sean mucho más bonitos. Me encanta compartir momentos contigo,
                incluso los más sencillos, porque contigo terminan sintiéndose
                especiales.
              </p>


              <p>
                Hay algo que todavía me emociona muchísimo, y es poder decir
                que somos novios. A veces lo pienso y todavia me hace pensar si es un ¿pero si?
                .
              </p>


              <p>
                Me gusta tu forma de ser, tu sonrisa, tu perfume, tus abrazos
                y todos esos pequeños detalles que hacen que seas tú.
              </p>


              <p>
                Sé que a veces soy bastante cursi, pero nunca lo hago porque
                sienta que deba hacerlo. Simplemente me nace demostrarte el
                cariño que te tengo.
              </p>


              <p>
                Gracias por existir. Gracias por aparecer en mi vida y
                permitirme conocerte un poquito más cada día.
              </p>


              <p>
                Me haces sentir como un millón de dólares... aunque solo tengo 70 pesos en comun. ❤️
              </p>


              <p>
                Ojalá esta página consiga sacarte una sonrisa, porque la hice
                pensando completamente en ti.
              </p>


              <div className="signature">

                <h3>
                  Con cariño,
                </h3>


                <h2>
                  Leo ❤️
                </h2>

              </div>


            </div>


          </section>



          {/* Fotos */}


          <section className="gallery-section">


            <h2>
              Nuestros recuerdos 📸
            </h2>


            <div className="gallery">

  <div className="memory">
    <img src={foto1} className="photo" alt="Recuerdo 1" />
    <p>Algo bonito contigo </p>
  </div>

  <div className="memory">
    <img src={foto2} className="photo" alt="Recuerdo 2" />
    <p>Te ves muy bonitaaaa </p>
  </div>

  <div className="memory">
    <img src={foto3} className="photo" alt="Recuerdo 3" />
    <p>Gracias por todooo </p>
  </div>

  <div className="memory">
    <img src={foto4} className="photo" alt="Recuerdo 4" />
    <p>Te quuiero muchooooo</p>
  </div>

  <div className="memory">
    <img src={foto5} className="photo" alt="Recuerdo 5" />
    <p>Me gusta compartir todo esto contigo</p>
  </div>

  <div className="memory">
    <img src={foto6} className="photo" alt="Recuerdo 6" />
    <p>Y espero que haya muchos más ❤️</p>
  </div>

</div>



    </section>

<section className="music">
  <h2>
    Tengo todo lo que siempre quise, y es tenerte a ti ❤️
  </h2>

  <a
    href="https://open.spotify.com/search/apocalypse%20cigarettes%20after%20sex"
    target="_blank"
    rel="noreferrer"
  >
    Apocalypse — Cigarettes After Sex
  </a>
</section>

<section className="final-message">
  <p>
    Gracias por llegar hasta aquí ❤️
  </p>

  <p>
    Gracias por leer hasta aquí. Espero que esta pequeña sorpresa te haya sacado una sonrisa, porque la hice con mucho cariño pensando en ti.
  </p>

  <h2>
    Con cariño,
  </h2>

  <h1>
    Leo ❤️
  </h1>
</section>

        </>

      )}

    </div>
  );
}

export default App;