import React from 'react'
// import {useState} from 'react'
import './Projects.css';
import {projects} from '../Constant/Constant.js';
import { motion } from "framer-motion"

const Projects = () => {
    // const [activeProjectFilter, setActiveprojectFilter] = useState('All');
    // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    // const projectFilter =(item)=>{

    // }

    return (
        <div className='Projects'>
            <h2 className="projectTitle">Projects</h2>
            <div className="projectDesc">I have worked on a wide range of projects from web apps to Machine learning Projects. Here are some of my projects.</div>
            {/* <div className="project-work-filter">
                {['All', 'Deep Learning', 'Machine Learning', 'Flask app', 'Python app', 'C++ app'].map((item, index) => (
                <div 
                    key={index} 
                    onClick={() => projectFilter(item)} 
                    className={`project-work-filter-item ${activeProjectFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </div> */}
            <motion.div
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="project-work-section"
            >
                {projects.map((projectt, index)=>(
                    <div className="project-work-item" key={index}>
                        <div className="project-img">
                            <img src={projectt.image} alt="projectIMG" />
                            <motion.div 
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="project-work-hover"
                            >
                                <a href={projectt.github}>
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                    >Github Link 
                                    </motion.div>
                                </a>
                                <a href={projectt.link}>
                                    <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{ duration: 0.25 }}
                                        >Live Link 
                                        </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="project-work-desc">
                            <h4 className="bold-text">{projectt.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{projectt.date}<br />{projectt.description}</p>

                            <div className="project-work-tag">
                                <p>{projectt.tags}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </motion.div>
    
        </div>
    )
}

export default Projects
