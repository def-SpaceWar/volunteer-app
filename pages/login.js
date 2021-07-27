import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP | Login</title>
      </Head>
      <NavBar />
      <br />
      <br />
      <br />
      <div className={styles.centerForm}>
          <form>
              <h1>Login</h1>
              <input placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <br />
              <center>
                <button type="submit">Submit</button>
              </center>
          </form>
      </div>
    </div>
  )
} 