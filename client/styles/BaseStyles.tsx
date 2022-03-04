import { css, Global } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';

const customStyles = css({
  body: {},
});

export const BaseStyles = () => (
  <>
    <GlobalStyles />
    <Global styles={customStyles} />
  </>
);
