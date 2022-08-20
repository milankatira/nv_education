import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
