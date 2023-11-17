const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

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

// const logo = {
//   name: 'React Logo',
//   title: 'React Logo',
//   path: './img/react-logo-1.png',
//   width: 200,
// }

// const element = (
//   <React.Fragment>
//     <img src={logo.path} alt={logo.name} title={logo.title} width={logo.width} />
//     <p>React Logo</p>
//   </React.Fragment>
// )

function renderElement() {
  const element = (
    <div className="post">
      <h1>My first blog post</h1>
      <div>Author: Mark Twain</div>
      <div>Published: {new Date().toLocaleTimeString()}</div>
      <p>
        I am new to blogging and this is my first post. You should expect a lot of great things from me.
      </p>
    </div>
  )

  root.render(element)
}

setInterval(renderElement, 1000)
// ReactDOM.createRoot(rootElement).render(element)
