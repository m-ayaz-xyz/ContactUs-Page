import React from 'react'
import styles from './Button.module.css'

const Button = ({isscnbtn, icon, text, ...rest}) => {
  return (
    <div>
        <button {...rest}  className={isscnbtn ? styles.scnbtn : styles.prim_btn}>
            {icon}
            {text}
        </button>
    </div>
  )
}

export default Button