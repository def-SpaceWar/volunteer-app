import Head from 'next/head'
import styles from '../styles/Form.module.css'
import NavBar from './navbar'
import firebase from './firebaseInit';
import {useState} from 'react';
import LocalStorage from './localStorage';

export default function SignUp() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
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

    function createUser(email, password, confirm_password, e) {
        e.preventDefault()
        if (password !== confirm_password || email === '' || password === '') {
            setErrorText('Invalid Password or Empty Fields!')
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                setErrorText('')
                localStorage.setItem("loginInfo", user.uid)
                window.location.replace(`/projects`)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (formData.password.length < 5) {
                    setErrorText('Password Must Be 5 Characters Long!')
                } else if (!formData.email.includes('@')) {
                    setErrorText('Please use a valid email!')
                }
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
                    <input placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <br />
                    <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    <br />
                    <input type="password" placeholder="Confirm Password" onChange={(e) => setFormData({...formData, confirm_password: e.target.value})} />
                    <br />
                    <center>
                        <button type="submit" onClick={(e) => createUser(formData.email, formData.password, formData.confirm_password, e)}>Submit</button>
                    </center>
                    {errorText && <center><p>{errorText}</p></center>}
                </form>
            </div>
        </div>
    )
}
