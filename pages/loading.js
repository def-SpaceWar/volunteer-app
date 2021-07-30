import NavBar from './navbar'
import styles from '../styles/Loading.module.css'
import Head from 'next/head'

export default function Loading() {
    return (
        <div className="container">
            <Head>
                <title>VolunteerUP | Loading...</title>
            </Head>
            <center>
                <div className={styles.loader}>
                    <div className={styles.loaderBar}></div>
                    <div className={styles.loaderBar}></div>
                    <div className={styles.loaderBar}></div>
                    <div className={styles.loaderBar}></div>
                    <div className={styles.loaderBar}></div>
                    <div className={styles.loaderBall}></div>
                </div>
                <h2 className={styles.loaderText}>Loading...</h2>
            </center>
        </div>
    )
}