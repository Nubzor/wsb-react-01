import React from 'react';

import './paragraph.css';

// props is always an object !!!
// props.text

const onMouseMoveHandler = event => console.log(event);

function Paragraph(props) {
    return <p className="paragraph" onMouseMove={onMouseMoveHandler}>
        <h1>{ props.text }</h1>
        { props.subTitle ? <h4>{ props.subTitle }</h4> : null }
    </p>
}

export default Paragraph;