import NavBar from './navbar'
import styles from '../styles/Form.module.css'
import Head from 'next/head'
import firebaseInit from './firebaseInit';
import firebase from 'firebase';
import {useState, useEffect} from 'react';

const db = firebaseInit.firestore()

export default function PostForm() {
    const [data, setData] = useState({
        name: '',
        description: '',
        email: '',
        phone_number: '',
        image: '',
        location: '',
        members: 0,
        views: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    function postData(e) {
        e.preventDefault()
        if (!data.image.includes('http') || data.name == '' || data.description == '' || (!data.email.includes('@')) || data.phone_number == '' || data.image == '' || data.location == '') return window.location.replace('/post');
        db.collection("Projects").add(data);
    }

    return (
        <div className="container">
            <Head>
                <title>VolunteerUP | Post</title>
            </Head>
            <NavBar />
            <br />
            <br />
            <br />
            <div className={styles.centerForm}>
                <form>
                    <h1>Post</h1>
                    <input placeholder="Name" onChange={(e) => setData({...data, name: e.target.value})}/>
                    <br />  
                    <input placeholder="Description" onChange={(e) => setData({...data, description: e.target.value})} />
                    <br />
                    <input placeholder="Email" type="email" onChange={(e) => setData({...data, email: e.target.value})} />
                    <br />
                    <input placeholder="Phone Number" onChange={(e) => setData({...data, phone_number: e.target.value})} />
                    <br />
                    <input placeholder="Link of Image" onChange={(e) => setData({...data, image: e.target.value})} />
                    <br />
                    <input placeholder="Location" onChange={(e) => setData({...data, location: e.target.value})} />
                    <br />
                    <center>
                        <button type="submit" onClick={(e) => postData(e)}>Submit</button>
                    </center>
                </form>
            </div>
        </div>
    )
}