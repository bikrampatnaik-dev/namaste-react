import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement('h1', { id: '1' }, 'h1 tag dada'),
            React.createElement('h2', { id: '2' }, 'h2 tag')
        ]
    )
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(parent);