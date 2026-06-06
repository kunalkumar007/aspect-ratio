import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "Aspect Ratio produces innovative media, strategic campaigns, and measurable digital growth for brands that need attention to turn into action.";
    const pillars = [
        {
            title: "Our Mission",
            text: "Craft visual and strategic content that drives results, from creative ideation to final delivery."
        },
        {
            title: "Core Values",
            text: "Build content with quality, fast response, effective execution, and practical experience in the content industry."
        },
        {
            title: "Our Vision",
            text: "Bring every client vision to life with digital solutions that create lasting value and stronger connections."
        }
    ]
    const stats = [
        { value: "50+", label: "Happy Clients" },
        { value: "1000+", label: "Content Delivered" },
        { value: "10+", label: "Website and SEO Projects" },
        { value: "10+", label: "Content Professionals" }
    ]
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <section id="about" ref={description} className={styles.description}>
            <div className={styles.body}>
                <div className={styles.copy}>
                    <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>We are more than a digital agency: a content partner for video production, brand storytelling, web development, SEO, social media, and advertising.</motion.p>
                    <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button}>
                            <a href="#contact">Talk to us</a>
                        </Rounded>
                    </div>
                </div>
                <motion.div variants={opacity} animate={isInView ? "open" : "closed"} className={styles.pillars}>
                    {pillars.map((pillar) => (
                        <article key={pillar.title}>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.text}</p>
                        </article>
                    ))}
                </motion.div>
            </div>
            <motion.div id="proof" variants={opacity} animate={isInView ? "open" : "closed"} className={styles.stats}>
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
