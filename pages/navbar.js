import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.centerSearch}>
                <form action="/login" method="GET">
                    <input type="text" placeholder="Search..." />
                </form>
            </div>
            <div className={styles.centerLogo}>
                <Image className={styles.logo}
                       src="/hackathon_logo.png"
                       alt="VolunteerUP"
                       width="100" height="100"
                       alt="volunteer.up" />
            </div>
            <div className={styles.centerLogo}>
                <ui className={styles.navLinks}>
                    <li><Link href="/login"><p>Login</p></Link></li>
                    <li><Link href="/login"><p>Sign Up</p></Link></li>
                </ui>
            </div>
        </div>
    )
}
