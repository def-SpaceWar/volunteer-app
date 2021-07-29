import NavBar from './navbar'
import styles from '../styles/Form.module.css'
import Head from 'next/head'
import firebase from './firebaseInit';
import {useState, useEffect} from 'react';

export default function Custom404() {
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
                    <input placeholder="Name" onChange={(e) => {}}/>
                    <br />  
                    <input placeholder="Description" onChange={(e) => {}} />
                    <br />
                    <input placeholder="Email" type="email" onChange={(e) => {}} />
                    <br />
                    <input placeholder="Phone Number" onChange={(e) => {}} />
                    <br />
                    <input placeholder="Link of Image" onChange={(e) => {}} />
                    <br />
                    <input placeholder="Location" onChange={(e) => {}} />
                    <br />
                    <center>
                        <button type="submit" onClick={(e) => authUser(e, formData.email, formData.password)}>Submit</button>
                    </center>
                </form>
            </div>
        </div>
    )
}