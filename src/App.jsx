import { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [idNota, setIdNota] = useState(null);

  function agregarNota() {
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const color = document.getElementById('colorInput').value;

    const nota = {
      id: Date.now(),
      titulo: titulo,
      contenido: contenido,
      color: color,
      editando: false,
    };
    setNotes([...notes, nota]);
  }

  function eliminarNota(id) {
    const respuesta = prompt('Escriba ok para eliminar');
    if (respuesta === 'ok') {
      const notasActualizadas = notes.filter(nota => nota.id !== id);
      setNotes(notasActualizadas);
    } else {
      alert('Eliminacion cancelada');
    }
  }

  function editarNota(e, id) {
    setIdNota(id);

    const nota = notes.find(nota => nota.id === id);
    // Seleccionamos el modal
    const exampleModal = document.getElementById('exampleModal');

    // Selecionamos los inputs del modal
    const modalTitle = exampleModal.querySelector('#recipient-name');
    const modalBody = exampleModal.querySelector('#message-text');

    modalTitle.value = nota.titulo;
    modalBody.value = nota.contenido;
  }

  function guardarNotaEditada() {
    if (validarModal()) {
      // Seleccionamos el modal
      const exampleModal = document.getElementById('exampleModal');

      // Selecionamos los inputs del modal
      const modalTitle = exampleModal.querySelector('#recipient-name');
      const modalBody = exampleModal.querySelector('#message-text');

      const nota = notes.find(nota => nota.id === idNota);

      const notaActualizada = {
        ...nota,
        titulo: modalTitle.value,
        contenido: modalBody.value,
      };
      setNotes(
        notes.map(nota => (nota.id === idNota ? notaActualizada : nota)),
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
              <button
                type='submit'
                className='btn btn-outline-light mt-4'
                onClick={e => {
                  e.preventDefault();
                  if (validarFormulario()) {
                    agregarNota();
                  }
                  const formulario = document.querySelector('#formulario');
                  formulario.reset();
                }}
              >
                Guardar
              </button>
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
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='exampleModalLabel'
              >
                Editar Nota
              </h1>
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
                  >
                    Titulo:
                  </label>
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
                  >
                    Nota:
                  </label>
                  <textarea
                    className='form-control'
                    id='message-text'
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cerrar
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={guardarNotaEditada}
                data-bs-dismiss='modal'
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: modal fin */}

      <div className='d-flex flex-wrap justify-content-center mb-5'>
        {notes.map(nota => (
          <Note
            key={nota.id}
            index={nota.id}
            titulo={nota.titulo}
            contenido={nota.contenido}
            color={nota.color}
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
  const titulo = document.getElementById('titulo').value;
  const contenido = document.getElementById('contenido').value;
  if (titulo === '' || contenido === '') {
    alert('Por favor, rellene todos los campos');

    return false;
  }
  return true;
}

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
