import './App.css';

import Href from './Href';
import Logo from './Logo';
import Paragraph from './Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <Paragraph
          text="Ćwiczymy sobie Reacta na zajeciąch w WSB"
          subTitle="Rozbudowujemy nasz komponent Paragraphu" />

        <Paragraph
          text="Alamakota" />

        <Paragraph
          text="Olamakota" />

        <Href linkText="Learn React <3" />
        <Href linkText="Ucz sie Reacta! <3" />
      </header>
    </div>
  );
}

export default App;
