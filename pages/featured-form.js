import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import Link from 'next/link'

export default function FeaturedForm() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP | Featured Form</title>
      </Head>
      <NavBar />
      <br />
      <br />
      <br />
      <div className={styles.centerForm}>
          <form>
              <h1>Featured Form</h1>
              <input type='tel' placeholder="Phone Number" required/>
              <br />
              <input placeholder="Project Name" required/>
              <br />
              <input placeholder="Your Website Link" />
              <br />
              <input placeholder="Why Choose You?" required/>
              <br />
              <center>
              <Link href="/form-done"><button type="submit">Submit</button></Link>
              </center>
          </form>
      </div>
    </div>
  )
}