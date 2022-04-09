import React from 'react';

import './href.css';

function Href(props) {
    return <a
        className="App-link hrefColor hrefSize"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
    { props.linkText }
    </a>
}

export default Href;