import React from 'react'
import './Skills.css'
import {skills} from '../Constant/Constant.js'

const Skills = () => {
  return (
    <div className='Skills'>
        <div className="title">Skills</div>
        <div className="skilldescription">Here are some of my skills on which I've been working </div>
        <div className="container">
            {skills.map((skill)=>(
                <div className="skill">
                    <div className="skillTitle">{skill.title}</div>
                    <div className="skillList">
                        {skill.skill.map((item)=>(
                            <div className="skillItem">
                                <img src={item.image} alt="img" className='img'/>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
