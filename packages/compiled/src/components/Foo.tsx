// import '@compiled/css-in-js';

export default function Foo({className = undefined}) {
  console.log(className);

  return <p css={{color: 'blue'}}>Foo</p>;
}
