import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e8e3dc",
        src: "aspectratio-hero.jpg",
        label: "Video campaigns"
    },
    {
        color: "#d6d7dc",
        src: "aspectratio-about.jpeg",
        label: "Brand storytelling"
    },
    {
        color: "#e3e3e3",
        src: "aspectratio-stats.jpeg",
        label: "1000+ deliveries"
    },
    {
        color: "#21242b",
        src: "/logo.png",
        label: "Aspect Ratio"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "aspectratio-stats.jpeg",
        label: "50+ clients"
    },
    {
        color: "#e5e0e1",
        src: "aspectratio-hero.jpg",
        label: "Social ads"
    },
    {
        color: "#d7d4cf",
        src: "/logo.png",
        label: "Digital strategy"
    },
    {
        color: "#e1dad6",
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
