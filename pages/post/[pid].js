import Image from 'next/image'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'
import database from '../firebaseInit'
import LocalStorage from '../localStorage'
import { useState, useEffect } from 'react'

const db = database.firestore()

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}

// const db = [
//     {
//         pid: '129789y21635237',
//         imgSrc: 'https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj',
//         name: 'St. Judes',
//         description: "St. Judes is an amazing organization working to research cancer and save childrens' lives!"
//         location: 'Memphis Tennessee'
//     }
// ]

const Post = ({ params }) => {
    let data;
    let [global, setGlobal] = useState({
        imgSrc: '/hackathon_logo.png',
        name: '404',
        description: 'This project isnt found',
        location: 'Your Mom\'s House'
    });

    const [localStorage, setLocalStorage] = useState(false);

    useEffect(function() {
        const localStorageInstance = new LocalStorage(window);
        setLocalStorage(localStorageInstance);
        if(localStorageInstance.isLoggedIn()) {
            let data, doc;
            db.collection("Projects").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id == pid) {
                        data = doc.data();
                        doc = doc;
                        db.collection("Projects").doc(doc.id).update({
                            views: data.views + 1
                        });
                    }
                });
            });
            
        }
    },[]);

    const pid = params.pid;

    db.collection("Projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id == pid) {
                data = doc.data();
                setGlobal({
                    imgSrc: data.image,
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    email: data.email,
                    members: data.members,
                    phone: data['phone_number']
                });
            }
        });
    });

    return (
        <div className={styles.container} >
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.postContainer}>
                <div className={styles.flexRow}>
                    <div className={styles.postImage}>
                        <Image className={styles.postImage} src={global.imgSrc} width="500%" height="500%" />
                    </div>
                    <div className={styles.contain}>
                        <h1 className={styles.postName}>{global.name}</h1>
                        <p className={styles.postLocation}>Location: {global.location}</p>
                        <p className={styles.postMembers}>Members: {global.members}</p>
                        <p className={styles.postEmail}>Email: {global.email}</p>
                        <p className={styles.postPhone}>Phone Number: {global.phone}</p>
                        <button className={styles.postButton} onClick={() => {
                            if (localStorage && !localStorage.isLoggedIn()) {
                                window.location.replace('/login')
                            }
                        }}>{localStorage && localStorage.isLoggedIn() ? 'Join' : 'Sign In To Join!'}</button>
                        <br />
                        <button className={styles.postButton} >Share</button>
                    </div>
                </div>
                <p className={styles.postDescription}>{global.description}</p>
            </div>
        </div >
    )
}

export default Post
