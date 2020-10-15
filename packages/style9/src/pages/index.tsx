import style9 from 'style9';
import Bar from 'components/Bar';
import Foo from 'components/Foo';

const styles = style9.create({
  foo: {
    padding: 10
  }
});

export default function Index() {
  return (
    <div style={{'--color-text': '#111'}}>
      <Foo className={styles('foo')} />
      <Bar />
    </div>
  );
}
