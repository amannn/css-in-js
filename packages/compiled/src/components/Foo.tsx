import theme from '../theme';

export default function Foo({className = undefined}) {
  console.log(className);

  return (
    <>
      <div
        className={className}
        css={{color: theme.colors.blue, padding: theme.space(2)}}
      >
        <p>Foo</p>
        <p css={{color: theme.colors.blue}}>Bar</p>
      </div>
    </>
  );
}
