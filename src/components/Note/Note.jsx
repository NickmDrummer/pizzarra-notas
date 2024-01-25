/* eslint-disable react/prop-types */
import './Note.css';
function Note({
  index,
  titulo,
  contenido,
  color,
  eliminarNota,
  editarNota,
  guardarNotaEditada,
  estadoBoton,
  notaEditando,
}) {
  const texturaHoja =
    'https://img.freepik.com/foto-gratis/lisa-pared-estuco-blanco_1194-6786.jpg?w=1380&t=st=1706037412~exp=1706038012~hmac=01ee711d1cdd839ac52f5ac8013d1a4f2d851bf34873b3f7cfa2fd9a42e1d574';
  const styles = {
    border: '6px solid ' + color,
  };

  const background = {
    backgroundColor: color + '30',
    borderRadius: '10px',
  };
  return (
    <div
      id={index}
      className='card note m-3 rounded-5'
      style={styles}
    >
      <img
        src={texturaHoja}
        className='card-img rounded-5'
        alt='...'
      />
      <div
        className={'card-img-overlay'}
        style={background}
      >
        <div className='h-100 d-flex flex-column row-gap-3 justify-content-between text-center'>
          <div className='note-content'>
            <h5
              id='tituloEditable'
              className='card-title cursiveFont'
            >
              {titulo}
            </h5>
            <div
              id='fake_textarea_content'
              className='card-text cursiveFont'
            >
              {contenido}
            </div>
          </div>
          <input
            type='hidden'
            id='tituloEditable'
            name='titulo_editable'
          />

          <input
            type='hidden'
            id='fake_textarea_content'
            name='textarea_content'
          />
          <div className='d-flex justify-content-around'>
            <button
              onClick={eliminarNota}
              className='btn btn-danger btn-sm cursor-pointer'
            >
              Borrar
            </button>
            <button
              onClick={estadoBoton === false ? editarNota : guardarNotaEditada}
              className='btn btn-info btn-sm cursor-pointer'
            >
              {notaEditando === false ? 'Editar' : 'Guardar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
