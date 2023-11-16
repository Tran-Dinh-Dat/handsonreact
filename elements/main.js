const rootElement = document.getElementById('root')

// const element = document.createElement('div')
// element.textContent = 'Hello world'
// element.className = 'container'
// rootElement.appendChild(element)

const element = React.createElement(
  'div',
  {
    className: 'container',
    children: 'Hello World'
  },
);

ReactDOM.createRoot(rootElement).render(element)
