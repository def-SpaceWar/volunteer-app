import Image from 'next/image'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'
import database from '../firebaseInit'
import { useState } from 'react'

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
                    phone: data['phone number']
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
                        <div className>
                            <h1 className={styles.postName}>{global.name}</h1>
                            <button className={styles.postButton}>Join Now</button>
                            <br />
                            <button className={styles.postButton} >Share</button>
                        </div>
                    </div>
                </div>
                <p className={styles.postLocation}>Location: {global.location}</p>
                <p className={styles.postMembers}>Members: {global.members}</p>
                <p className={styles.postEmail}>Email: {global.email}</p>
                <p className={styles.postPhone}>Phone Number: {global.phone}</p>
                <p className={styles.postDescription}>{global.description}</p>
            </div>
        </div >
    )
}

export default Post
