import type { AppProps } from 'next/app';
import { BaseStyles } from '../styles/BaseStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
