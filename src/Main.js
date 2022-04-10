import React from 'react';

import './main.css';

const people = [
    {
        name: 'Ala',
        surname: 'Alowata',
        age: 26,
    },
    {
        name: 'Ola',
        surname: 'Olowata',
        age: 43,
    },
    {
        name: 'Jan',
        surname: 'Niezbędny',
        age: 18,
    },
    {
        name: 'Piotr',
        surname: 'Potrzebny',
        age: 30,
    },
    {
        name: 'Ela',
        surname: 'Elowata',
        age: 34,
    },
]

const peopleRenderCallback = (person) => {
    return <li>{person.name}</li>
}

const peopleListRenderCallback = (person) => {
    return <li className={person.age > 30 ? 'background' : ''}>
        {person.name} {person.surname}
    </li>
}

class Main extends React.Component {
    onClickHandler = event => alert(12345);

    render() {
        return <main onClick={this.onClickHandler}>
            <ol>
                { people.map(peopleRenderCallback) }
            </ol>
            <ul>
                { people.map(peopleListRenderCallback)}
            </ul>
        </main>
    }
}

export default Main;