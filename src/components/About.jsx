import React from 'react'
import style from './About.module.css'

const About = (props) => {
  return (
    <section className={style.aboutSection} id='about'>
        <h2 className={style.aboutTitle}>{props.aboutTitle}</h2>
        <p className={style.aboutPara}>{props.aboutPara}</p>
    </section>
  )
}

export default About
