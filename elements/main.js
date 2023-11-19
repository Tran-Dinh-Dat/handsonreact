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

// function renderElement() {
//   const element = (
//     <div className="post">
//       <h1>My first blog post</h1>
//       <div>Author: Mark Twain</div>
//       <div>Published: {new Date().toLocaleTimeString()}</div>
//       <p>
//         I am new to blogging and this is my first post. You should expect a lot of great things from me.
//       </p>
//     </div>
//   )

//   root.render(element)
// }

// setInterval(renderElement, 1000)

// ReactDOM.createRoot(rootElement).render(element)


// const element = <div className="container">Hello element</div>
// ReactDOM.createRoot(rootElement).render(element)

// function HelloWorld() {
//   return <div className="container">Hello Function Component</div>
// }

// class HelloWorld extends React.Component {
//   render() {
//     return <div className="container">Hello class component</div>
//   }
// }

// function App() {
//   return (
//     <div>
//       <HelloWorld/>
//       <HelloWorld/>
//       <HelloWorld/>
//       <HelloWorld/>
//     </div>
//   )
// }

// root.render(<App/>)

const okUrl = 'http://localhost:3000/photos?_page=1&_limit=10';
const notFoundErrorUrl = 'https://httpstat.us/404';
const forbiddenErrorUrl = 'https://httpstat.us/403';
const serverErrorUrl = 'https://httpstat.us/500';

// axios
//   .get(forbiddenErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))
// axios
//   .get(notFoundErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))
// axios
//   .get(serverErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))
// axios
//   .get(okUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data));


// fetch(okUrl).then((response) => console.log(response));
// fetch(serverErrorUrl)
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then(handleErrors)
//   .then(parseJSON)
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))

// function handleErrors(response) {
//   if (!response.ok) throw new Error(response.statusText);
//   return response;
// }
// function parseJSON(response) {
//   return response.json();
// }
// fetch(okUrl)
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))

function PhotoList() {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState(null);

  function toUserError(error) {
    console.log('Call API to log the raw error. ', error);
    return 'There was an error loading the photos.';
  }

  React.useEffect(() => {
    setLoading(true);

    fetch(okUrl)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setError(null);
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        const userError = toUserError(error);
        setError(userError);
        setLoading(false);
      })
  }, []);

  if (error) {
    return <div>{error}</div>
  } else if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {photos?.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title}/>
              <h3>{photo.title}</h3>
            </li>
          )
        })}
      </ul>
    )
  }
}

root.render(<PhotoList/>);