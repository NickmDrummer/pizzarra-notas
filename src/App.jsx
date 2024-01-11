import './App.css';
import Note from './components/Note/Note';

function App() {
  return (
    <div className="App">
      <h1 className="text-white">Pizzarra Notas</h1>
      <div className="nuevaNotaContainer">
        <button
          type="button"
          className="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#nuevanota"
        >
          Nueva Nota
        </button>

        <div
          className="modal fade"
          id="nuevanota"
          tabIndex="-1"
          aria-labelledby="nuevanotaLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modalNota">
              <div className="modal-header border-bottom-0 ">
                <h1 className="modal-title fs-5" id="nuevanotaLabel">
                  Nueva Nota
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Titulo:
                    </label>
                    <input
                      type="text"
                      className="form-control fs-3 fw-bold"
                      id="recipient-name"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Mensaje:
                    </label>
                    <textarea
                      className="form-control fs-3 fw-bold"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top-0 ">
                <button
                  type="button"
                  className="btn btn-danger fs-5 "
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-dark fs-5">
                  Guardar Nota
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notasContainer">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default App;
