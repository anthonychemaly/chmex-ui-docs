import React from 'react'
import styles from './styles.modules.scss'

const GradientButton = ({ text, ...others }) => {
  return (
    <span className={styles.gradientButton} {...others}>
      <span className={styles.gradientButtonText}>{text}</span>
    </span>
  )
}

export default GradientButton
