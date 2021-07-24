import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP</title>
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png" />
      </Head>
      <div className={styles.navContainer}>
        <img className={styles.logo} src="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png" alt="Voluntierup"/>
      </div>
      <div className={styles.mainContainer}>
        <h1>VolunteerUP</h1>
        <p>Helping non-profits find volunteer groups</p>
      </div>
    </div>
  )
}