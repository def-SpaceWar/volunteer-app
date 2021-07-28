import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import firebase from './firebaseInit';
import {useState} from 'react';

export default function SignUp() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
  })

  function createUser(email, password, confirm_password, e) {
    e.preventDefault()
    if (password !== confirm_password || email === '' || password === '') {
      return console.log('Passwords Do not Match')
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return console.log(error.messsage)
    });


  }
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
              <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <br />
              <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
              <br />
              <input type="password" placeholder="Confirm Password" onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })} />
              <br />
              <center>
                <button type="submit" onClick={(e) => createUser(formData.email, formData.password, formData.confirm_password, e)}>Submit</button>
              </center>
          </form>
      </div>
    </div>
  )
} 