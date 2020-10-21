import {styled} from 'style';

// TODO: How can I add `type: button`?
const Button1 = styled('button', {
  color: 'white',
  border: 'none',
  paddingY: 10,
  paddingX: 20,
  borderRadius: 3,
  lineHeight: '20px',
  fontSize: 14,
  breakpointMedium: {
    paddingX: 25
  },
  variants: {
    color: {
      blue: {
        backgroundColor: 'blue'
      },
      violet: {
        backgroundColor: 'blueviolet'
      }
    },
    appearance: {
      outline: {
        border: '1px solid currentColor',
        backgroundColor: 'transparent'
      }
    }
  }
});

Button1.defaultProps = {
  color: 'blue'
};

Button1.compoundVariant(
  {
    color: 'violet',
    appearance: 'outline'
  },
  {
    color: 'blueviolet'
  }
);

Button1.compoundVariant(
  {
    color: 'blue',
    appearance: 'outline'
  },
  {
    color: 'blue'
  }
);

export default Button1;
