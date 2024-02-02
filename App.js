/**
 * Single element to create
 */
const heading = React.createElement(
    'h1',
    {id: 'heading'},
    "Hello world from React"
);
/**
 * Multiple element
 */
const parent = React.createElement(
    "div",
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [
            React.createElement('h1',{}, 'h1 tag'),
            React.createElement('h2',{}, 'h2 tag')
        ]
    )
)

console.log(parent)
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(parent);