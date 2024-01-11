import './Note.css';
function Note() {
  const titulo = 'Receta pasta';

  return (
    <div className="note">
      <img src="./img/note/note.png" style={{ width: '100%' }} alt="Note" />

      <div className="note-content">
        <h3>{titulo}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos enim
          deserunt consequatur iure explicabo, provident eveniet odio ea quasi
          odit quo fugit similique quidem molestiae cum tempora nam sunt. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
          quibusdam voluptatum, consequatur minima nemo voluptates suscipit
          excepturi provident ipsum, ullam rerum? Dolor, eius aliquid! Cumque
          dolor nostrum voluptate minima adipisci. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione inventore eveniet esse sed,
          natus delectus veniam a qui autem ipsam nostrum hic est corporis et
          fuga labore tenetur saepe obcaecati. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Placeat consequatur a explicabo,
          deserunt sunt voluptate illo non, quis voluptatum ipsa, aspernatur
          pariatur? Nobis est illo incidunt temporibus praesentium fuga cum?
        </p>
      </div>
    </div>
  );
}

export default Note;
