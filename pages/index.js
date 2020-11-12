import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {TextHeading, TextSubHeading, TextTitle, TextSmall} from '../component/Text/'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karma Veris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="left" className={styles.column}>
            <div className={styles.top-left}>
              <TextSmall string={"Karma Veris"}/>
            </div>
            <div className={styles.bottom}>
              <TextSmall string={"Karma Veris"}/>
            </div>
        </div>
        <div id="right" className={styles.column}>
            <div className={styles.top-right}>
              <TextTitle string={"Karma Veris"}/>
            </div>
            <div className={styles.bottom}>
              <TextSmall string={"Karma Veris"}/>
            </div>
        </div>
      </main>
    </div>
  )
}
