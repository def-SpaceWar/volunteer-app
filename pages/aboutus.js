import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import Link from 'next/link'

export default function AboutUS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP | About Us</title>
        </Head>
        <NavBar />
        <div className={styles.aboutCard}>
            <h1 className={styles.aboutTitle}>About Us</h1>
            <p className={styles.aboutText}>We started this non-profit after we noticed, there weren't many places to find some non-profits to help out. So we had only one idea... Create our own website to help others find non-profits. This site is built so if you are a student or volunteer and want to help out you can by searching for non profits. If you are a host and own a non profit where you need volunteers you can create a post and have people discover how you help the community out, and if they are intrested they can join too!</p>
        </div>
    </div>
  )
}