import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Text from '../component/Text'
import NavigationBar from '../component/SideNavigationBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karma Veris</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavigationBar selected="home"/>
        <div className={styles.rightColumn}>
            <div className={styles.topRight}>
              <div className={styles.topRight1}/>
              <div className={styles.topRight1}>
                <Text type={"heading"} string={"Firstname Lastname"}/>
                <Text type={"sub-heading"} string={"TVE18CSXXX"}/>
              </div>
              <div className={styles.topRight2}>
                <div className={styles.topRight2SubChosen}>
                  <a>
                    <Text type={"small"} string={"Overview"}/>
                  </a>
                </div>
                <div className={styles.topRight2Sub}>
                  <a href="404" className={styles.gap}>
                    <Text type={"small"} string={"Edit"}/>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.bottomRightSub}>
                <div className={styles.bottomRightSubItems}>
                  <Text type={"title"} string={"College of Engineering Trivandrum"}/>
                </div>
                <div className={styles.bottomRightSubItems}>
                  <Text type={"title"} string={"S5"}/>
                </div>
                <div className={styles.bottomRightSubItems}>
                  <Text type={"title"} string={"CSE"}/>
                </div>
                <div className={styles.bottomRightSubItems}>
                  <Text type={"title"} string={"BTech"}/>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}
