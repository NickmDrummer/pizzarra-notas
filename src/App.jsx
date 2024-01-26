import { useState, useEffect } from 'react';
import './App.css';
import Note from './components/Note/Note';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const notasLocalStorage = JSON.parse(localStorage.getItem('notas')) || [];

  const [notas, setNotas] = useState(notasLocalStorage);
  const [idNota, setIdNota] = useState(null);
  const [backgroundModal, setBackgroundModal] = useState('#fff');

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  function agregarNota() {
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const color = document.getElementById('colorInput').value;

    const nota = {
      id: uuidv4(),
      titulo: titulo,
      contenido: contenido,
      color: color,
    };

    setNotas([...notas, nota]);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    if (validarFormulario()) {
      agregarNota();
    }
  };

  function editarNota(id) {
    setIdNota(id);
    const color = notas.find(nota => nota.id === id).color;

    const bgModal = `${color}`;

    setBackgroundModal(bgModal);

    // Seleccionamos el modal
    const exampleModal = document.getElementById('exampleModal');

    // Selecionamos los inputs del modal
    const modalTitle = exampleModal.querySelector('#recipient-name');
    const modalBody = exampleModal.querySelector('#message-text');

    const notaEncontrada = notas.find(nota => nota.id === id);

    modalTitle.value = notaEncontrada.titulo;
    modalBody.value = notaEncontrada.contenido;
  }

  function guardarNotaEditada() {
    if (validarModal()) {
      // Seleccionamos el modal
      const exampleModal = document.getElementById('exampleModal');

      // Selecionamos los inputs del modal
      const modalTitle = exampleModal.querySelector('#recipient-name');
      const modalBody = exampleModal.querySelector('#message-text');

      const notaEncontrada = notas.find(nota => nota.id === idNota);

      const notaActualizada = {
        ...notaEncontrada,
        titulo: modalTitle.value,
        contenido: modalBody.value,
      };

      setNotas(
        notas.map(nota => (nota.id === idNota ? notaActualizada : nota)),
      );
    }
  }

  return (
    <div className='App'>
      <h1 className='text-white cursiveFont'>Pizzarra Notas</h1>
      <div className='container mt-5'>
        <form id='formulario'>
          <div className='m-auto col-lg-3 col-md-6 col-10'>
            <div className='mb-3 text-white'>
              <h2 className='text-white mb-4 cursiveFont'>Nueva Nota</h2>
              <label
                htmlFor='titulo'
                className='form-label'
              >
                Titulo
              </label>
              <input
                type='text'
                className='form-control'
                id='titulo'
                placeholder='Escriba el titulo'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='contenido'
                className='form-label text-white'
              >
                Nota
              </label>
              <textarea
                className='form-control'
                id='contenido'
                rows='3'
                placeholder='Escriba su nota'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='colorInput'
                className='form-label text-white mb-3'
              >
                Elige un color
              </label>
              <input
                type='color'
                className='form-control form-control-color mx-auto mb-3'
                id='colorInput'
                title='Elige el color de la nota'
              />

              <div className='d-flex justify-content-around'>
                <button
                  className='btn btn-outline-danger mt-4 btn-sm'
                  onClick={() => {
                    setNotas([]);
                  }}
                >
                  Borrar Notas
                </button>

                <button
                  type='submit'
                  className='btn btn-info mt-4 btn-sm'
                  onClick={e => {
                    {
                      manejarEnvio(e);
                    }
                    const formulario = document.querySelector('#formulario');
                    formulario.reset();
                  }}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* TODO: modal inicio */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div
            className='modal-content'
            style={{ backgroundColor: `${backgroundModal}` }}
          >
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='exampleModalLabel'
              ></h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label
                    htmlFor='recipient-name'
                    className='col-form-label'
                  ></label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  ></input>
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='message-text'
                    className='col-form-label'
                  ></label>
                  <textarea
                    className='form-control'
                    id='message-text'
                    rows='5'
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-light'
                data-bs-dismiss='modal'
              >
                Cerrar
              </button>
              <button
                type='button'
                className='btn btn-info'
                data-bs-dismiss='modal'
                onClick={() => guardarNotaEditada()}
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: modal fin */}

      <div className='d-flex flex-wrap justify-content-center mb-5'>
        {notas.length > 0 &&
          notas.map(nota => (
            <Note
              key={nota.id}
              index={nota.id}
              titulo={nota.titulo}
              contenido={nota.contenido}
              color={nota.color}
              notas={notas}
              setNotas={setNotas}
              editarNota={() => editarNota(nota.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

function validarFormulario() {
  const titulo = document.getElementById('titulo').value;
  const contenido = document.getElementById('contenido').value;
  if (titulo === '' || contenido === '') {
    alert('Por favor, rellene todos los campos');

    return false;
  }
  return true;
}

// eslint-disable-next-line no-unused-vars
function validarModal() {
  // Seleccionamos el modal
  const exampleModal = document.getElementById('exampleModal');

  // Selecionamos los inputs del modal
  const modalTitle = exampleModal.querySelector('#recipient-name').value;
  const modalBody = exampleModal.querySelector('#message-text').value;

  if (modalTitle === '' || modalBody === '') {
    alert('Por favor, rellene todos los campos');
    return false;
  }

  return true;
}
