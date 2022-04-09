import React from 'react';

import Href from './Href';
import Logo from './Logo';
import Paragraph from './Paragraph';

// function Header() {
//     return <div>
//             Alamakota
//         </div>
// }

class Header extends React.Component {
    render() {
        return <header className="App-header">
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
    }
}

export default Header;