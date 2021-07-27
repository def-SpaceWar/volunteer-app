import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP | Sign Up</title>
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
      </Head>
      <NavBar />
      <br />
      <br />
      <br />
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