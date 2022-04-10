import React from 'react';

import './paragraph.css';

// props is always an object !!!
// props.text

class Paragraph extends React.Component {
    constructor() {
        super();

        this.state = {
            isMouseOver: false,
        }
    }

    onMouseOverHandler = event => {
        this.setState({
            isMouseOver: true,
        })
    }

    onMouseOutHandler = event => {
        this.setState({
            isMouseOver: false,
        })
    }

    render() {
        const paragraphClassName = this.state.isMouseOver ? 'paragraph-important' : 'paragraph';

        return <div className={paragraphClassName}
                    onMouseOver={this.onMouseOverHandler}
                    onMouseOut={this.onMouseOutHandler}
                    >
            <h1>{ this.props.text }</h1>
            { this.props.subTitle ? <h4>{ this.props.subTitle }</h4> : null }
        </div>
    }
}

export default Paragraph;