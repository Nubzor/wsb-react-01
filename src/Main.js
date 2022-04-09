import React from 'react';

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

class Main extends React.Component {
    render() {
        return <main>
            <ol>
                { people.map(peopleRenderCallback) }
            </ol>
        </main>
    }
}

export default Main;