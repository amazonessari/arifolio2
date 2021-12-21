import styles from './button.module.scss'
import Link from 'next/link'

export default function InternalButton({ link, external, text }) {
    return (
        <Link href={link}>
        {external ? (
            <a className={styles.external} target="_blank">
                { text }
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53294 1.59998H14.3996L1.59961 14.4" stroke="#DDDDDD"/></svg>
            </a>
          ) : (
            <a className={styles.internal}>
                { text }
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1333 3.73333L14.4 8H1.06665" stroke="#090909"/></svg>
            </a>
          )}
          </Link>
    )
  }