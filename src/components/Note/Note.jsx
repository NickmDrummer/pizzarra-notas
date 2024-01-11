import close from './../../../public/img/close-circle-sharp.svg';
import pen from './../../../public/img/pencil-sharp.svg';

import './Note.css';
function Note({ titulo, contenido }) {
  return (
    <div className="note">
      <img src="./img/note/note.png" style={{ width: '100%' }} alt="Note" />
      <img id="pen" src={pen} className="notaIconos" alt="Editar" />
      <img id="close" src={close} className="notaIconos" alt="Borrar" />

      <div className="note-content">
        <h3>{titulo}</h3>
        <p>{contenido}</p>
      </div>
    </div>
  );
}

export default Note;
