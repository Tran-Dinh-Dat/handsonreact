type GreeterProps = {
  first: string;
  last: string;
}; 

function Greeter(props: GreeterProps) {
  const { first, last } = props;
  return <h1>Hello, { first } { last }</h1>
}

export default Greeter;
