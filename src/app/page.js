'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Portfolio from '../components/Portfolio';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    let locomotiveScroll;
    let timeoutId;

    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          locomotiveScroll = new LocomotiveScroll();

          timeoutId = setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()

    return () => {
      clearTimeout(timeoutId);
      locomotiveScroll?.destroy?.();
    }
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <Portfolio />
      <SlidingImages />
      <Contact />
    </main>
  )
}
