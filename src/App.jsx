import { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {
  const [notes, setNotes] = useState([]);

  function agregarNota() {
    const titulo = document.getElementById('recipient-name').value;
    const contenido = document.getElementById('message-text').value;

    const nota = {
      titulo: titulo,
      contenido: contenido,
    };
    setNotes([...notes, nota]);
  }

  function eliminarNota(index) {
    const notes = [...notes];
    notes.splice(index, 1);
    setNotes(notes);
  }

  return (
    <div className="App">
      <h1 className="text-white">Pizzarra Notas</h1>
      <div className="nuevaNotaContainer">
        <button
          type="button"
          className="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#nuevaNota"
        >
          Nueva Nota
        </button>

        <div
          className="modal fade"
          id="nuevaNota"
          tabIndex="-1"
          aria-labelledby="nuevanotaLabel"
          aria-hidden="true"
        >
          <form id="Formulario">
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
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fs-3 fw-bold"
                    >
                      Titulo:
                    </label>
                    <input
                      type="text"
                      className="form-control fs-3 fw-bold"
                      id="recipient-name"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="message-text"
                      className="col-form-label fs-3 fw-bold"
                    >
                      Mensaje:
                    </label>
                    <textarea
                      className="form-control fs-3 fw-bold"
                      id="message-text"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-top-0 ">
                  <button
                    type="button"
                    className="btn btn-danger fs-5 "
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      if (validarFormulario()) {
                        agregarNota();
                      }

                      document.getElementById('Formulario').reset();
                    }}
                    className="btn btn-dark fs-5"
                    data-bs-dismiss="modal"
                  >
                    Guardar Nota
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="notasContainer">
        {notes.map((nota, index) => (
          <Note
            key={index}
            index={index}
            titulo={nota.titulo}
            contenido={nota.contenido}
            eliminarNota={index => {
              eliminarNota(index);
            }}
          ></Note>
        ))}
      </div>
    </div>
  );
}

export default App;

function validarFormulario() {
  const titulo = document.getElementById('recipient-name').value;
  const contenido = document.getElementById('message-text').value;
  if (titulo === '' || contenido === '') {
    alert('Por favor, rellene todos los campos');

    return false;
  }
  return true;
}
