import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.centerSearch}>
                <form action="/login" method="GET">
                    <input type="text" placeholder="Search..." />
                </form>
            </div>
            <div className={styles.centerLogo}>
                <img className={styles.logo} src="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png" alt="VolunteerUP"/>
            </div>
            <div className={styles.centerLogo}>
                <ui className={styles.navLinks}>
                    <li><a href="/login"><p>Login</p></a></li>
                    <li><a href="/login"><p>Sign Up</p></a></li>
                </ui>
            </div>
        </div>
    )
}