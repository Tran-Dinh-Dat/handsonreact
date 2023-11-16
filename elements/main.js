const rootElement = document.getElementById('root')

// const element = document.createElement('div')
// element.textContent = 'Hello world'
// element.className = 'container'
// rootElement.appendChild(element)

// const element = React.createElement(
//   'div',
//   {
//     className: 'container',
//     children: 'Hello World'
//   },
// );

// const person =  { first: 'Joe', last: 'Doe' };
// const element = (
//   <div className="container">
//     Hello {person.first} {person.last}
//   </div>
// )

const logo = {
  name: 'React Logo',
  title: 'React Logo',
  path: './img/react-logo-1.png',
  width: 200,
}

const element = (
  <React.Fragment>
    <img src={logo.path} alt={logo.name} title={logo.title} width={logo.width} />
    <p>React Logo</p>
  </React.Fragment>
)

ReactDOM.createRoot(rootElement).render(element)
