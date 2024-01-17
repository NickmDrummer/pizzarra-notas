/* eslint-disable react/prop-types */
import close from './../../img/close-circle-sharp.svg';
import pen from './../../img/pencil-sharp.svg';

import './Note.css';
function Note({ index, titulo, contenido, eliminarNota }) {
  return (
    <div id={index} className="note">
      <img src="./img/note/note.png" style={{ width: '100%' }} alt="Note" />
      <img id="pen" src={pen} className="notaIconos" alt="Editar" />
      <img
        id="close"
        src={close}
        className="notaIconos"
        alt="Borrar"
        onClick={index => {
          {
            eliminarNota(index);
          }
        }}
      />

      <div className="note-content">
        <h3 className="fw-bold fs-2 ">{titulo}</h3>
        <p className="fw-bold fs-5 ">{contenido}</p>
      </div>
    </div>
  );
}

export default Note;
