import '@compiled/react';
import Foo from 'components/Foo';

export default function Index() {
  return (
    <>
      <p
        css={{
          color: 'blue'
        }}
      >
        Index
      </p>
      <Foo css={{color: 'red'}} />
    </>
  );
}
