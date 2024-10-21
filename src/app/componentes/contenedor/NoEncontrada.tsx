import { NavLink } from "react-router-dom";
import dino from "../../../assets/img/dinosaurio.jpg"
export const NoEncontrada = () => {
  return (
    <>
      <main>
        <div className="container py-4">
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
            <img src={dino} height="150" alt="Error" />
              <br />
              <br />
              </h1>
              <p className="col-md-8 fs-4">Pagina no encontrada...</p>
              <NavLink to="/">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  style={{ backgroundColor: "#198754", borderColor: "#198754" }}
                >
                  INICIO
                </button>
              </NavLink>
            </div>
          </div>
          <footer className="pt-3 mt-4 text-body-secondary border-top">
            Developer by Suárez Esteban and Robert Rivas © 2024
          </footer>
        </div>
      </main>
    </>
  );
};
