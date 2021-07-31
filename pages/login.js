import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import firebase from '../public/firebaseInit';
import {useState, useEffect} from 'react';
import LocalStorage from '../public/localStorage'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errorText, setErrorText] = useState('')
    const [localStorage, setLocalStorage] = useState(false);

    useEffect(function () {
        const localStorageInstance = new LocalStorage(window);
        setLocalStorage(localStorageInstance);
        if (localStorageInstance.isLoggedIn()) {
            console.log('Logged In')
        }
    }, []);

    function authUser(e, email, password) {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setErrorText('')
                var user = userCredential.user;
                localStorage.setItem('loginInfo', user.uid);
                localStorage.setItem('loginEmail', user.email);
                window.location.replace(`/projects`)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorText('No Account Found!')
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
                    <input placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <br />
                    <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    <br />
                    <center>
                        <button type="submit" onClick={(e) => authUser(e, formData.email, formData.password)}>Submit</button>
                    </center>
                    {errorText && <center><p>{errorText}</p></center>}
                </form>
            </div>
        </div>
    )
}
