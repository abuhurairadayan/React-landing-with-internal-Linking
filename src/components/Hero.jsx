import React from 'react'
import style from './Hero.module.css'

const Hero = (props) => {
  return (
    <section  id='hero' className={style.hero}>
      <h1 className={style.heroH1}>{props.h1}</h1>
      <p className={style.heroPara}>{props.para}</p>
      <button className={style.heroBtn}>{props.button}</button>
    </section>
  )
}

export default Hero
