/// <reference types="next" />
/// <reference types="next/types/global" />

import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    '--color-text'?: string;
  }
}