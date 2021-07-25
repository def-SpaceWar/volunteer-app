import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP</title>
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png"/>
      </Head>
      <NavBar />
      <div className={styles.centerForm}>
          <form>
              <h1>Sign Up</h1>
              <input placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <br />
              <input type="password" placeholder="Confirm Password" />
              <br />
              <center>
                <button type="submit">Submit</button>
              </center>
          </form>
      </div>
    </div>
  )
} 