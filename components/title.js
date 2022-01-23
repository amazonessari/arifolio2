import styles from './title.module.scss'

export default function Title({ title, id }) {
    return (
        <div className={`${styles.subtitle} titleComponent`} id={id}>
          <div className={styles.line}></div>
          <h1>{title}</h1>
        </div>
    )
  }