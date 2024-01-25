import { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [editando, setEditando] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [notaEditando, setNotaEditando] = useState({});

  // eslint-disable-next-line no-unused-vars
  function manejarForm() {
    if (editando === false) {
      agregarNota();
    }
  }
  function agregarNota() {
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const color = document.getElementById('colorInput').value;

    const nota = {
      id: Date.now(),
      titulo: titulo,
      contenido: contenido,
      color: color,
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
    console.log(e.target, id);
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
