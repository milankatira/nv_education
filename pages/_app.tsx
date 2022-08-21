import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
import { useEffect } from 'react';
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';
// import '@/styles/global.css';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  const progress = new ProgressBar({
    size: 4,
    color: '#b91c1c',
    className: 'z-50',
    delay: 100,
  });

  Router.events.on('routeChangeStart', () => {
    progress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    progress.finish();
  });

  Router.events.on('routeChangeError', () => {
    progress.finish();
  });
  return (
    <div>
      <ThemeProvider attribute='class'>
        <GoTop />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
