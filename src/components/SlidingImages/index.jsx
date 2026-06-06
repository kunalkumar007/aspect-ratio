import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#f7efe4",
        src: "aspectratio-hero.jpg",
        label: "Video campaigns"
    },
    {
        color: "#f1e7d9",
        src: "aspectratio-about.jpeg",
        label: "Brand storytelling"
    },
    {
        color: "#f09010",
        src: "aspectratio-stats.jpeg",
        label: "1000+ deliveries"
    },
    {
        color: "#1c1d20",
        src: "/logo.png",
        label: "Aspect Ratio"
    }
]

const slider2 = [
    {
        color: "#f5e2c8",
        src: "aspectratio-stats.jpeg",
        label: "50+ clients"
    },
    {
        color: "#ffad33",
        src: "aspectratio-hero.jpg",
        label: "Social ads"
    },
    {
        color: "#ebe5dc",
        src: "/logo.png",
        label: "Digital strategy"
    },
    {
        color: "#fff4e3",
        src: "aspectratio-about.jpeg",
        label: "Web and SEO"
    }
]

const getImageSrc = (src) => src.startsWith('/') ? src : `/images/${src}`;

export default function SlidingImages() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={project.label}
                                    src={getImageSrc(project.src)}/>
                                </div>
                                <span>{project.label}</span>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={project.label}
                                    src={getImageSrc(project.src)}/>
                                </div>
                                <span>{project.label}</span>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
