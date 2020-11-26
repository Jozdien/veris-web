import styles from './styles.module.css'
import Text from '../Text'

export default function TopDash({heading, subheading, items, selected}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftindent}/>
      <div className={styles.body}>
        <div className={styles.topindent}/>
        <div className={styles.name}>
          <Text type={"heading"} string={heading}/>
        </div>
        <div className={styles.id}>
          <Text type={"sub-heading"} string={subheading}/>
        </div>
        <div className={styles.betweenindent}/>
        <div className={styles.menu}>  
          {
            items.map(data => {
              if(data == selected) 
                return (
                  <div className={styles.menu}>
                    <div className={styles.item}>
                      <a>
                        <Text type={"section-selected"} string={data}/>
                      </a>
                      <div className={styles.selectedLine}/>
                    </div>
                    <div className={styles.itemgap}/>
                  </div>
                )
              else
                return (
                  <div className={styles.menu}>
                    <div className={styles.item}>
                      <a href="404">
                        <Text type={"section-unselected"} string={data}/>
                      </a>
                    </div>
                    <div className={styles.itemgap}/>
                  </div>
                )
            })
          }
        </div>
      </div>
      <div className={styles.rightindent}/>
    </div>
  )
}