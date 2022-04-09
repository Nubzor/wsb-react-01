import './App.css';

import Logo from './Logo';
import Paragraph from './Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Paragraph
          text="Ćwiczymy sobie Reacta na zajeciąch w WSB" />
        <Paragraph
          text="Alamakota" />
        <Paragraph
          text="Olamakota" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
