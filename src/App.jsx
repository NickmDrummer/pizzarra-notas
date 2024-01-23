import { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [editando, setEditando] = useState(false);
  const [notaEditando, setNotaEditando] = useState({});
  //TODO: Crear funcion para manejar el evento

  function manejarForm() {
    if (editando === false) {
      agregarNota();
    }
  }
  function agregarNota() {
    const titulo = document.getElementById('recipient-name').value;
    const contenido = document.getElementById('message-text').value;

    const nota = {
      id: Date.now(),
      titulo: titulo,
      contenido: contenido,
    };
    setNotes([...notes, nota]);
  }

  function eliminarNota(id) {
    const notasActualizadas = notes.filter(nota => nota.id !== id);
    setNotes(notasActualizadas);
  }

  function editarNota(id) {
    setEditando(true);
    const nota = notes.find(nota => nota.id === id);

    notaEditando.id = id;
    const { titulo, contenido } = nota;
    // Obtenemos los datos y los ponemos en el modal
    const nameNotaInput = document.getElementById('recipient-name');
    const messageInput = document.getElementById('message-text');
    nameNotaInput.value = titulo;
    messageInput.value = contenido;

    // leemos los cambios en el input y los actualizamos
    const notasMenosNota = notes.filter(nota => nota.id !== id);
    setNotes([...notasMenosNota, notaEditando]);
  }

  return (
    <div className='App'>
      <h1 className='text-white'>Pizzarra Notas</h1>
      <div className='nuevaNotaContainer'>
        <button
          id='btnNuevaNota'
          type='button'
          className='btn btn-outline-light'
          data-bs-toggle='modal'
          data-bs-target='#nuevaNota'
          onClick={() => setEditando(false)}
        >
          Nueva Nota
        </button>

        <div
          className='modal fade'
          id='nuevaNota'
          tabIndex='-1'
          aria-labelledby='nuevanotaLabel'
          aria-hidden='true'
        >
          <form id='Formulario'>
            <div className='modal-dialog'>
              <div className='modal-content modalNota'>
                <div className='modal-header border-bottom-0 '>
                  <h1
                    className='modal-title fs-5'
                    id='nuevanotaLabel'
                  >
                    Nueva Nota
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={() =>
                      document.getElementById('Formulario').reset()
                    }
                  ></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label
                      htmlFor='recipient-name'
                      className='col-form-label fs-3 fw-bold'
                    >
                      Titulo:
                    </label>
                    <input
                      onChange={e => {
                        setNotaEditando({
                          ...notaEditando,
                          titulo: e.target.value,
                        });
                      }}
                      type='text'
                      className='form-control fs-3 fw-bold'
                      id='recipient-name'
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='message-text'
                      className='col-form-label fs-3 fw-bold'
                    >
                      Mensaje:
                    </label>
                    <textarea
                      onChange={e => {
                        setNotaEditando({
                          ...notaEditando,
                          contenido: e.target.value,
                        });
                      }}
                      className='form-control fs-3 fw-bold'
                      id='message-text'
                    ></textarea>
                  </div>
                </div>
                <div className='modal-footer border-top-0 '>
                  <button
                    type='button'
                    className='btn btn-danger fs-5 '
                    data-bs-dismiss='modal'
                    onClick={() =>
                      document.getElementById('Formulario').reset()
                    }
                  >
                    Cerrar
                  </button>
                  <button
                    type='submit'
                    onClick={e => {
                      e.preventDefault();
                      if (validarFormulario()) {
                        manejarForm();
                      }

                      document.getElementById('Formulario').reset();
                    }}
                    className='btn btn-dark fs-5'
                    data-bs-dismiss='modal'
                  >
                    Guardar Nota
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='notasContainer'>
        {notes.map(nota => (
          <Note
            key={nota.id}
            index={nota.id}
            titulo={nota.titulo}
            contenido={nota.contenido}
            eliminarNota={() => eliminarNota(nota.id)}
            editarNota={e => editarNota(e, nota.id)}
          />
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
