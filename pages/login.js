import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import firebase from './firebaseInit';
import {useState} from 'react';

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function authUser(e, email, password) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return console.log(errorMessage)
    });
  }

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
              <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <br />
              <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
              <br />
              <center>
                <button type="submit" onClick={(e) => authUser(e, formData.email, formData.password)}>Submit</button>
              </center>
          </form>
      </div>
    </div>
  )
} 