import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='px-20'>
        <ThemeProvider attribute='class'>
        <GoTop />
          <Navbar />
          <Component {...pageProps} />
          <Footer  />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
