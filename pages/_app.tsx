import { Footer } from '../components/Footer/Footer';
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import { Header } from '../components/Header/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
