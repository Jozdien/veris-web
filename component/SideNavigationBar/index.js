import styles from './styles.module.css'
import Icon from '../IconNavigationBar'
export default function NavigationBar({selected}) {
  return (
    <div className={styles.container}>
      <div className={styles.topspace}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/logo" id="vercel"/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/home" id="home" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/gradcap" id="marks_attendance" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/rupee" id="fees" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/calendar" id="events" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/blog" id="blogs" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/news" id="news" selected={selected}/>
      </a>
      <div className={styles.gap}></div>
      <a href="404" className={styles.iconbox}>
        <Icon imageSource="/icons/bell" id="notifications" selected={selected}/>
      </a>
      <div className={styles.bottomspace}></div>
    </div>
  )
}