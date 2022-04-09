import React from 'react';

function Href(props) {
    return <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
    { props.linkText }
    </a>
}

export default Href;