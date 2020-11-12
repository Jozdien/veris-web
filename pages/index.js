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
        <TextHeading string={"Karma Veris"}/>
        <TextSubHeading string={"Karma Veris"}/>
        <TextTitle string={"Karma Veris"}/>
        <TextSmall string={"Karma Veris"}/>
      </main>
    </div>
  )
}
