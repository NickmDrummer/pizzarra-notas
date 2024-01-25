import { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [butonEditSave, setButonEditSave] = useState(false);

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
    const targetId = Number(
      e.target.parentElement.parentElement.parentElement.parentElement.id,
    );
    const nota = notes.find(nota => nota.id === id);
    if (targetId === id) {
      nota.editando = true;
      setButonEditSave(true);
      const tituloEditable =
        e.target.parentElement.parentElement.firstChild.childNodes[0];
      const contenidoEditable =
        e.target.parentElement.parentElement.firstChild.childNodes[1];

      tituloEditable.setAttribute('contenteditable', 'true');
      contenidoEditable.setAttribute('contenteditable', 'true');
    }
  }

  function guardarNotaEditada(e, id) {
    const targetId = Number(
      e.target.parentElement.parentElement.parentElement.parentElement.id,
    );

    const nota = notes.find(nota => nota.id === id);
    if (targetId === id) {
      setButonEditSave(false);
      nota.editando = false;

      const tituloEditable =
        e.target.parentElement.parentElement.firstChild.childNodes[0].firstChild
          .data;
      const contenidoEditable =
        e.target.parentElement.parentElement.firstChild.childNodes[1].firstChild
          .data;
      const notaActualizada = {
        id: nota.id,
        titulo: tituloEditable,
        contenido: contenidoEditable,
        color: nota.color,
        editando: false,
      };
      setNotes(notes.map(nota => (nota.id === id ? notaActualizada : nota)));
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
            guardarNotaEditada={e => guardarNotaEditada(e, nota.id)}
            estadoBoton={butonEditSave}
            notaEditando={nota.editando}
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
