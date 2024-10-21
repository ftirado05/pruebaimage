import { NavLink } from "react-router-dom";
export const Inicio = () => {
  return (
    <>
      <main>
      <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom"><i className="bi bi-music-note-list"></i> Bienvenidos <i className="bi bi-music-note-list"></i> </h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
        <i className="bi bi-person-raised-hand"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Hola</h3>
        <p>Estas en la pagina inicio</p>
        <NavLink to="/" className="icon-link">
        <button type="button" className="btn btn-success">
                INICIO
              </button>
        </NavLink>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <i className="bi bi-cassette"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Explora el mundo con musica</h3>
        <NavLink  to="https://open.spotify.com/intl-es" target="_blank">
        <i className="bi bi-spotify btn fa-2x"></i>
        </NavLink>
      </div>
    </div>
  </div>
      </main>
    </>
  );
};
