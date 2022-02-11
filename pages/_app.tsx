import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
