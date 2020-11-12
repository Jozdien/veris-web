import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {TextHeading, TextSubHeading, TextTitle, TextSmall} from '../component/Text'
import NavigationBar from '../component/SideNavigationBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karma Veris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavigationBar/>
        <div className={styles.rightColumn}>
            <div className={styles.topRight}>
              <TextTitle string={"Karma Veris3"}/>
            </div>
            <div className={styles.bottom}>
              <TextSmall string={"Karma Veris4"}/>
            </div>
        </div>
      </main>
    </div>
  )
}
