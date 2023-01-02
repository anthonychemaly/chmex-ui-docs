import React from 'react'
import styles from './styles.modules.scss'

const Code = ({ style, children, code, value }) => {
  return (
    <pre className={styles.pre} style={{ ...style }}>
      <button
        onClick={() => {
          navigator.clipboard.writeText(children || value)
        }}
        className={styles.copy}
      >
        Copy
      </button>
      <code className={styles.code}>
        {children || <div dangerouslySetInnerHTML={{ __html: code }} />}
      </code>
    </pre>
  )
}

export default Code
