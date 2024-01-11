import './Note.css';
function Note({ titulo, contenido }) {
  return (
    <div className="note">
      <img src="./img/note/note.png" style={{ width: '100%' }} alt="Note" />

      <div className="note-content">
        <h3>{titulo}</h3>
        <p>{contenido}</p>
      </div>
    </div>
  );
}

export default Note;
