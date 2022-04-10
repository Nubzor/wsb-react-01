import React from 'react';

class Cwiczenia extends React.Component {
    constructor() {
        super();

        // stan poczatkowy
        this.state = {
            licznik: 0,
            tablicaImion: ['Ala', 'Ola'],
            input: '',
        }
    }

    onClickPlusHandler = event => {
         this.setState({
            licznik: this.state.licznik + 1,
         });
    }

    onClickMinusHandler = event => {
        this.setState({
            licznik: this.state.licznik - 1,
         });
    }

    onClickAdressBookHandler = event => {
        this.setState({
            tablicaImion: this.state.tablicaImion.concat(this.state.input),
        });
    }

    onChangeHandler = event => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return <div>
            <div>
                <span>Licznik: {this.state.licznik}</span>
                <button onClick={this.onClickPlusHandler}>Click +</button>
                <button onClick={this.onClickMinusHandler}>Click -</button>
            </div>
            <div>
                <p>Ksiazka adresowa</p>
                <ul>
                    {this.state.tablicaImion.map(imie => {
                        return <li key={imie}>{imie}</li>
                    })}
                </ul>
                <input type="text" onChange={this.onChangeHandler} />
                <button 
                    onClick={this.onClickAdressBookHandler}>
                        Dodaj do ksiązki adresowej
                </button>
            </div>
        </div>      
    }
}

export default Cwiczenia;