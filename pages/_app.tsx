import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import { useState } from 'react';

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
  return (
    <div>
      <ThemeProvider attribute='class'>
        <GoTop />
        <div className='sticky top-0 w-full bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>
          <div
            className='progress-bar'
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
