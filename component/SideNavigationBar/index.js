import styles from './styles.module.css'
import Icon from '../IconNavigationBar'
export default function NavigationBar({selected}) {
  return (
    <div className={styles.container}>
      <div className={styles.topspace}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/logo" id="vercel"/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/home" id="home" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/gradcap" id="marks_attendance" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/rupee" id="fees" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/calendar" id="events" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/blog" id="blogs" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/news" id="news" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/bell" id="notifications" selected={selected}/>
      </a>
      <div className={styles.bottomspace}></div>
    </div>
  )
}
