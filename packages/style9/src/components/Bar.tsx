import style9 from 'style9';

const BLUE = 'blue';

const styles = style9.create({
  root: {
    color: 'var(--color-text)',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: BLUE
  }
});

export default function Bar() {
  return <p className={styles('root')}>Bar</p>;
}
