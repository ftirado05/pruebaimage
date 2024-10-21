export const RegistrarArtistas = () => {
  return (
    <>
      <main>
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">
            Registra tus artistas favoritos
          </h2>
 
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('src/assets/img/1p.png')" }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  TOP #1
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto"></li>
                    <li className="d-flex align-items-center me-3"></li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('src/assets/img/2.jpeg')" }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  TOP #2
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto"></li>
                    <li className="d-flex align-items-center me-3"></li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: "url('src/assets/img/3.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  TOP #3
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto"></li>
                    <li className="d-flex align-items-center me-3"></li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
