import styles from './title.module.scss'

export default function Title({ title }) {
    return (
        <div className={styles.subtitle}>
          <div className={styles.line}></div>
          <h1>{title}</h1>
        </div>
    )
  }