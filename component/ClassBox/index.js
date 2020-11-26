import styles from './styles.module.css'
import Text from '../Text'

export default function ClassBox({className, name, id, type, content}) {
  if (type == 'box-next')
  {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>
            <Text type="box-title" string={className}/>
          </div>
          <div className={styles.subtitle}>
            <Text type="box-subtitle" string={name + " | " + id}/>
          </div>
        </div>
        <div className={styles.indent}/>
        <div className={styles.line}/>
        <div className={styles.content}>
          <Text type={type} string={"Next: " + content}/>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>
            <Text type="box-title" string={className}/>
          </div>
          <div className={styles.subtitle}>
            <Text type="box-subtitle" string={name + " | " + id}/>
          </div>
        </div>
        <div className={styles.indent}/>
        <div className={styles.line}/>
        <div className={styles.content}>
          <Text type={type} string={content}/>
        </div>
      </div>
    )
  }
}