import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div id="contact" style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"Aspect Ratio studio visual"}
                            src={`/images/aspectratio-about.jpeg`}
                            />
                        </div>
                        <h2>Let us create</h2>
                    </span>
                    <h2>content that converts</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"var(--brand-accent)"} className={styles.button}>
                            <a href="tel:+918383022835">Call now</a>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <a href="mailto:sales@aspectratio.tech">sales@aspectratio.tech</a>
                        </Rounded>
                        <Rounded>
                            <a href="tel:+918383022835">+91 83830 22835</a>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Location</h3>
                            <p>Faridabad, Haryana</p>
                        </span>
                        <span>
                            <h3>Proof</h3>
                            <p>50+ clients / 1000+ deliveries</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Services</h3>
                            <Magnetic>
                                <a href="#services">Video Production</a>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <a href="#services">Web Development</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#services">SEO</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#services">Social Media</a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
