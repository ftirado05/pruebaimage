export const AdminArtistas = () => {
  return (
    <>
      <main>
      <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom"><i className="bi bi-person-fill-gear"></i> Administrar artistas <i className="bi bi-person-fill-gear"></i></h2>
 
    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold text-body-emphasis">Generos</h2>
        <p className="text-body-secondary">Conoce cualquier genero</p>
      </div>
 
      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex bg-gradient fs-4 rounded-3">
            <i className="bi bi-cassette-fill"></i>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Vallenato</h4>
            <p className="text-body-secondary">Administra tu artista de genero vallenato...</p>
          </div>
 
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex bg-gradient fs-4 rounded-3">
            <i className="bi bi-earbuds"></i>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Reggaeton</h4>
            <p className="text-body-secondary">Administra tu artista de genero reggaeton...</p>
          </div>
 
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex bg-gradient fs-4 rounded-3">
            <i className="bi bi-music-player-fill"></i>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Hip-Hop</h4>
            <p className="text-body-secondary">Administra tu artista de genero <br /> Hip-Hop...</p>
          </div>
 
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex bg-gradient fs-4 rounded-3">
            <i className="bi bi-music-note-beamed"></i>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Salsa</h4>
            <p className="text-body-secondary">Administra tu artista de genero Salsa...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </main>
    </>
  );
};
