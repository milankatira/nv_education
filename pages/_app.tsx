import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import { useState } from 'react';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll);
  }
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
