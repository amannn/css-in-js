/** @jsx jsx */
import {jsx} from '@emotion/react';

export default function Button({children}) {
  return (
    <button
      css={{
        color: 'cornflowerblue'
      }}
    >
      {children}
    </button>
  );
}
