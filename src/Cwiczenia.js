import React from 'react';

class Cwiczenia extends React.Component {
    constructor() {
        super();

        // stan poczatkowy
        this.state = {
            tablicaImion: [],
            input: '',
        }
    }

    onClickAdressBookHandler = event => {
        if (this.state.input.length === 0) {
            return;
        } else if (this.state.input.length > 10) {
            return;
        }

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