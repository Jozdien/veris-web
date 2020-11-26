import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Text from '../component/Text'
import NavigationBar from '../component/SideNavigationBar'
import TopDash from '../component/TopDash'
import ClassBox from '../component/ClassBox'
var classes = [{"className": 'Theory of Computation', "name": 'Dr. Sumesh Divakaran', "id": 'CS301', "type": 'box-next', "content": '11:00 16/11/20'}, 
               {"className": 'System Software', "name": 'Prof. Preethi L', "id": 'CS303', "type": 'box-next', "content": '10:10 16/11/20'},
               {"className": 'Theory of Computation', "name": 'Dr. Sumesh Divakaran', "id": 'CS301', "type": 'box-next', "content": '11:00 16/11/20'}, 
               {"className": 'System Software', "name": 'Prof. Preethi L', "id": 'CS303', "type": 'box-next', "content": '10:10 16/11/20'},];

/* To-Do: Find Way to break classes into separate rows of 4 elements each*/

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karma Veris</title>
        <link rel="icon" href="/icons/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <NavigationBar selected="home"/>
        <div className={styles.rightColumn}>
          <TopDash heading="Arun Jose" subheading="TVE18CS012" items={["Overview", "Edit"]} selected="Overview"/>
          <div className={styles.body}>
            <div className={styles.leftindent}/>
            <div className={styles.bodyCenter}>
              <div className={styles.bodyHead}>
                <div className={styles.bodyHeadItemOne}>
                  <Text type={"head"} string={"College of Engineering Trivandrum"}/>
                </div>
                <div className={styles.bodyHeadItemTwo}>
                  <Text type={"head"} string={"S5"}/>
                </div>
                <div className={styles.bodyHeadItemTwo}>
                  <Text type={"head"} string={"CSE"}/>
                </div>
                <div className={styles.bodyHeadItemTwo}>
                  <Text type={"head"} string={"B.Tech"}/>
                </div>
                <div className={styles.headIndent}/>
              </div>
              <div className={styles.headLine}/>
              <div className={styles.bodyTitle}>
                <Text type={"title"} string={"My Classes"}/>
              </div>
              <div className={styles.classes}>
                {
                  classes.map((data, index) => (
                    <ClassBox className={data.className} name={data.name} id={data.id} type={data.type} content={data.content}/>
                  ))
                }
              </div>
            </div>
            <div className={styles.rightIndent}/>
          </div>
        </div>
      </main>
    </div>
  )
}
