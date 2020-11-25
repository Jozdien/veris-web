import styles from './styles.module.css'
export default function Text({ string, type }) {
    if (type == 'title')
    {
        return (
            <div className={styles.container}>
                <p className={styles.textTitle}>{string}</p>
            </div>
            )
    }

    else if (type == 'heading')
    {
        return (
            <div className={styles.container}>
                <p className={styles.textHeading}>{string}</p>
            </div>
            )
    }

    else if (type == 'sub-heading')
    {
        return (
            <div className={styles.container}>
                <p className={styles.textSubHeading}>{string}</p>
            </div>
            )
    }

    else if (type == 'small')
    {
        return (
            <div className={styles.container}>
                <p className={styles.textSmall}>{string}</p>
            </div>
            )
    }

    else if (type == 'bold')
    {
        return (
            <div className={styles.container}>
                <p className={styles.textBold}>{string}</p>
            </div>
            )
    }

    else
    {
        return (
            <div className={styles.container}>
                <p className={styles.textError}>Invalid Text</p>
            </div>
            )
    }

}
