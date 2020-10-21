import {createStyled} from '@stitches/react';

export const {styled, css} = createStyled({
  breakpoints: {
    breakpointMedium: rule => `@media (min-width: 640px) { ${rule} }`
  },
  utils: {
    paddingX: config => value => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: config => value => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
});

export const theme = {
  colors: {
    white: 'white',
    blue: '#0470f5',
    violet: 'blueviolet'
  },
  typography: {
    label: {
      fontSize: 14,
      lineHeight: '20px',
      breakpointMedium: {
        fontSize: 16
      }
    }
  },
  space(amount: number) {
    return [5, 10, 15, 20, 25, 30][amount - 1];
  },
  radius(amount: 1 | 2) {
    return [3, 5][amount - 1];
  }
};
