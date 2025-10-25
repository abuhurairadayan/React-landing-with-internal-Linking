import React from 'react'
import style from './Footer.module.css'
const Footer = (props) => {
  return (
    <footer className={style.footer} id='contact'>
        <p>{props.copyrightText}</p>
        <p>{props.contactInfo}</p>
    </footer>
  )
}

export default Footer
