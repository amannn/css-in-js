import {StyleSheet, StyleResolver} from 'style-sheet';

const styles = StyleSheet.create({
  root: {
    color: 'red',
    padding: 20
  }
});

// console.log(styles);
// console.log(StyleResolver.resolve(styles.root));

export default function Button({children}) {
  return (
    <button className={StyleResolver.resolve(styles.root)}>{children}</button>
  );
}
