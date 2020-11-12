import styles from './styles.module.css'
import Icon from '../IconNavigationBar'
export default function NavigationBar() {
  return (
    <div className={styles.container}>
          <div className={styles.gap}></div>
          <a href="404" className={styles.gap}>
            <Icon imageSource="/vercel.svg"/>
          </a>
          <a href="404" className={styles.gap}>
            <Icon imageSource="/vercel.svg"/>
          </a>
          <a href="404" className={styles.gap}>
            <Icon imageSource="/vercel.svg"/>
          </a>
          <div className={styles.gap}></div>
          <a href="404" className={styles.gap}>
            <Icon imageSource="/vercel.svg"/>
          </a>
      </div>
  )
}
