import './Note.css';
function Note() {
  return (
    <div className="note">
      <img src="./img/note/note.png" alt="" />
      <div className="note-content">
        <h2>Receta pasta flora</h2>
        <p>
          Ingredientes:
          <ul>
            <li>1/2 taza de tomate picado</li>
            <li>1/2 taza de cebolla picada</li>
            <li>1/2 taza de jitomate picado</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Note;
