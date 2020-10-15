import style9 from 'style9';

const styles = style9.create({
  root: {
    color: 'blue'
  }
});

export default function Foo({className}) {
  return <p className={styles('root')}>Foo</p>;
}
