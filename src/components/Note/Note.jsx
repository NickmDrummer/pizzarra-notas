import './Note.css';
function Note() {
  const titulo = 'Receta pasta';

  return (
    <div className="note">
      <img src="./img/note/note.png" style={{ width: '100%' }} alt="Note" />

      <div className="note-content">
        <h2>{titulo}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos enim
          deserunt consequatur iure explicabo, provident eveniet odio ea quasi
          odit quo fugit similique quidem molestiae cum tempora nam sunt. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
          quibusdam voluptatum, consequatur minima nemo voluptates suscipit
          excepturi provident ipsum, ullam rerum? Dolor, eius aliquid! Cumque
          dolor nostrum voluptate minima adipisci.
        </p>
      </div>
    </div>
  );
}

export default Note;
