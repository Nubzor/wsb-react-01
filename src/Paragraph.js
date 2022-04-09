import React from 'react';

// props is always an object !!!
// props.text

function Paragraph(props) {
    return <p>
        { props.text }
    </p>
}

export default Paragraph;