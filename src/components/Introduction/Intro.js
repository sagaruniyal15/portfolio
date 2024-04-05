import React from 'react'
import './Intro.css';
import image from '../../assets/image.png';
import {Bio} from '../Constant/Constant.js'
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className='intro'>
      <div className="introContent">
        <span className='hello'>Hi, I'm <br /><span className='name'>{Bio.name}</span></span>
        <div className="box">
          <span className="roles">I'm a </span>
          <span className="typing">
            <Typewriter options={{strings:Bio.roles, 
                                  autoStart: true,
                                  loop: true
                                }} 
            />
          </span>
        </div>
        
        <span className="description">
          {Bio.description}
        </span>
      </div>

      <div>
        <img src={image} alt="ProfileImg" className='bgimg'/>
      </div>
    </div>
  )
}

export default Intro
