import React from 'react'
import style from './Cards.module.css'

const Cards = (props) => {
  return (
    <section className={style.cardContainer} id='services'>
        <h2 className={style.cardTitle}>{props.cardTitle}</h2>
        <p className={style.cardPara}>{props.cardPara}</p>
    </section>
  )
}

export default Cards
