'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "Content Strategy & Planning",
    category: "Strategy",
    description: "Strategic content plans built to engage audiences and drive outcomes.",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    color: "#1c1d20"
  },
  {
    title: "Video Production",
    category: "Production",
    description: "Compelling visuals that inform, inspire, and convert.",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    color: "#3a332c"
  },
  {
    title: "Brand Storytelling",
    category: "Creative",
    description: "Narratives that make brands memorable and easier to trust.",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    color: "#f7efe4"
  },
  {
    title: "Podcast Production",
    category: "Audio",
    description: "End-to-end podcast production for stronger brand presence.",
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    color: "#fff4e3"
  },
  {
    title: "Web Development & Website Design",
    category: "Digital",
    description: "Websites with visual polish, usable structure, and performance in mind.",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    color: "#141516"
  },
  {
    title: "Logo & Graphic Design",
    category: "Identity",
    description: "Brand visuals that clarify identity across campaigns and channels.",
    src: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=900&q=80",
    color: "#f5e2c8"
  },
  {
    title: "Social Media Advertising",
    category: "Growth",
    description: "Targeted campaigns built to increase visibility and engagement.",
    src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=900&q=80",
    color: "#ffad33"
  },
  {
    title: "Search Engine Optimization",
    category: "SEO",
    description: "Optimization that improves visibility and search performance.",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    color: "#ebe5dc"
  },
  {
    title: "Social Media Management",
    category: "Social",
    description: "Content management that builds consistent audience connection.",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    color: "#242424"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

const getImageSrc = (src) => src.startsWith('http') || src.startsWith('/') ? src : `/images/${src}`;

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    if(!xMoveContainer.current) return;
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
  <main id="services" onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.header}>
      <p>Services</p>
      <h2>Check our services</h2>
    </div>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} category={project.category} description={project.description} manageModal={manageModal} key={index}/>
        })
      }
    </div>
    <Rounded backgroundColor={"var(--brand-accent)"}>
      <a href="mailto:sales@aspectratio.tech">Start a project</a>
    </Rounded>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={getImageSrc(src)}
                    width={300}
                    height={220}
                    alt={project.title}
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  </main>
  )
}
