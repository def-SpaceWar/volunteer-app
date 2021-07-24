import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP</title>
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png"/>
      </Head>
      <div className={styles.navContainer}>
        <img className={styles.logo} src="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png" alt="VolunteerUP"/>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.InfoContainer}>
          <h1 className={styles.cardTitle}>VolunteerUP</h1>
          <p>C'mon lets be real; without a community, life would be boring 🥱. Thats why we invented VolunteerUP, a way to give back to the community and make it a better place for everyone! 😃</p>
          <div className={styles.flexContainer}>
            <button className={styles.joinButton}><strong>Join Now!</strong></button>
            <div className={styles.hr}></div>
            <button className={styles.signButton}><strong>Sign In!</strong></button>
          </div>
          <p className={styles.cardFooter}>Made with love by VolunteerUP Dev Team ❤️</p>
        </div>
        <div className={styles.svgContainer}>
          <img className={styles.svg} src="https://cdn.discordapp.com/attachments/865389806376321075/868326536883875890/undraw_elements_cipa.png" />
        </div>
      </div>
    </div>
  )
} 