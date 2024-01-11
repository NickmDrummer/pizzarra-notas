import './App.css';
import Note from './components/Note/Note';

function App() {
  return (
    <div className="App">
      <div className="nuevaNota">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Open modal for @mdo
        </button>
      </div>
      <div className="notasContainer">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default App;
