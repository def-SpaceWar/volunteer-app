import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'
import ProjectCard from '../projects'
import database from '../firebaseInit'

const db = database.firestore()

// const db = [
//     {
//         pid: '129789y21635237',
//         imgSrc: 'https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj',
//         name: 'St. Judes',
//         description: "St. Judes is an amazing organization working to research cancer and save childrens' lives!"
//     }
// ]

const Post = () => {
    const router = useRouter()
    const [data, setData] = useState(false);
    const { pid } = router.query
    let imgSrc = '/hackathon_logo.png'
    let name = 'Insert Name Here'
    let description = 'Insert Description Here'

    db.collection("Projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id == pid) {
                setData(doc.data());
            }
        });
    });    
    
    // useEffect(() => {
    if (data) {
        console.log(data.imgSrc);
        for (let i = 0; i < data.length; i++) {
            imgSrc = data[i].image;
            name = data[i].name;
            description = data[i].description;
        }
    }
    // }, [data])

    return (    
        <div className={styles.container}>
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.postContainer}>
                <div className={styles.flexRow}>
                    <div className={styles.postImage}>
                        <Image className={styles.postImage} src={imgSrc} width="500%" height="500%" />
                        <div className>
                            <h1 className={styles.postName}>{name}</h1>
                            <button className={styles.postButton}>Join Now</button>
                            <br />
                            <button className={styles.postButton} onClick={() => setModalOpen(!modalOpen)}>Share</button>
                        </div>
                    </div>
                </div>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </div>
    )
}

export default Post
