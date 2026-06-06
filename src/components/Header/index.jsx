'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

const navItems = [
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Proof', href: '#proof' },
    { title: 'Contact', href: '#contact' }
]

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <a href="/" className={styles.logo} aria-label="Aspect Ratio home">
                <span className={styles.logoGraphic}>
                    <Image
                        src="/logo.png"
                        fill
                        sizes="170px"
                        alt="Aspect Ratio logo"
                    />
                </span>
            </a>
            <div className={styles.nav}>
                {navItems.map((item) => (
                    <Magnetic key={item.href}>
                        <div className={styles.el}>
                            <a href={item.href}>{item.title}</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                ))}
                <Magnetic>
                    <a className={styles.callLink} href="tel:+918383022835">Call Now</a>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
