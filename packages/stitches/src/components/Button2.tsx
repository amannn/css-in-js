import {ReactNode} from 'react';
import {css, theme} from 'style';

type Props = {
  appearance?: 'outline';
  className?: string;
  children: ReactNode;
  color?: 'blue' | 'violet';
};

export default function Button2({
  appearance,
  children,
  className,
  // `defaultProps` are being deprecated, therefore use default assignments
  // instead (see https://github.com/facebook/react/pull/16210).
  color = 'blue'
}: Props) {
  // There's no additional component created inbetween.
  return (
    <button
      // Additional props can be added as usual
      // and don't need additional wrappers.
      type="button"
      // `className` is the only styling API contract between components,
      // therefore the same styling approach can be used for internal as
      // well as 3rd party components.
      className={css(
        // Base styles that always apply
        {
          color: theme.colors.white,
          border: 'none',
          paddingY: theme.space(2),
          paddingX: theme.space(4),
          borderRadius: theme.radius(1),
          ...theme.typography.label,
          // Breakpoints
          breakpointMedium: {
            paddingX: theme.space(5)
          }
        },
        // Variants are styles grouped by a key.
        {
          blue: {
            // Theming is solved via typed JavaScript access without using
            // globals, optionally propagated through React context.
            backgroundColor: theme.colors.blue
          },
          violet: {
            backgroundColor: theme.colors.violet
          }
        }[color],
        // "Compound variants" are solved by referencing
        // one variant in the other one.
        {
          outline: {
            color: {
              blue: theme.colors.blue,
              violet: theme.colors.violet
            }[color],
            border: '1px solid currentColor',
            backgroundColor: 'transparent'
          }
        }[appearance],
        // Overrides are achieved by appending a class name
        className
      )}
    >
      {children}
    </button>
  );
}
