import styles from './styles.module.css'
export default function Text({ string, type }) {
  if (type == 'heading')
  {
    return (
      <span className={styles.heading}>{string}</span>
    )
  }

  else if (type == 'sub-heading')
  {
    return (
      <span className={styles.subHeading}>{string}</span>
    )
  }

  else if (type == 'section-selected')
  {
    return (
      <p className={styles.sectionSelected}>{string}</p>
    )
  }

  else if (type == 'section-unselected')
  {
    return (
      <p className={styles.sectionUnselected}>{string}</p>
    )
  }

  else if (type == 'head')
  {
    return (
      <p className={styles.head}>{string}</p>
    )
  }

  else if (type == 'title')
  {
    return (
      <p className={styles.title}>{string}</p>
    )
  }

  else if (type == 'box-title')
  {
    return (
      <p className={styles.boxTitle}>{string}</p>
    )
  }

  else if (type == 'box-subtitle')
  {
    return (
      <p className={styles.boxSubTitle}>{string}</p>
    )
  }

  else if (type == 'box-next')
  {
    return (
      <p className={styles.boxNext}>{string}</p>
    )
  }

  else if (type == 'box-present')
  {
    return (
      <p className={styles.boxPresent}>{string}</p>
    )
  }

  else if (type == 'box-absent')
  {
    return (
      <p className={styles.boxAbsent}>{string}</p>
    )
  }

  else
  {
    return (
      <p className={styles.error}>Invalid Text</p>
    )
  }
}