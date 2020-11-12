import styles from './styles.module.css'
export default function Text({ string }) {
  return (
      <div className={styles.container}>
          <p className={styles.text}>{string}</p>
      </div>
  )
}
