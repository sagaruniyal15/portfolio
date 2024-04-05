import React from 'react'
import './Education.css';
import {education} from '../Constant/Constant'


const Education = () => {
  return (
    <section id='Education'>
      <span className="edutitle">Education <br /></span>
      <span className="edudescription">My Education details are as follows :</span>
      <div className="edubars">
            {education.map((edu)=>(
                <div className="edubar">
                  <img src={edu.img} alt="img" />
                  <div className="edubartext">
                    <h2 className="eduschoolname">{edu.school}</h2>
                    <h3 className="eduDegree">{edu.degree}</h3>
                    <h3 className="edudate">{edu.date}</h3>
                    <h3 className="eduGrade">{edu.grade}</h3>
                    <p>{edu.desc}</p>
                  </div>
                </div>
            ))}
      </div>
      
    </section>
  )
}

export default Education
