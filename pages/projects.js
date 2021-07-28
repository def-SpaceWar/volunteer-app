import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import NavBar from './navbar'
import firebase from './firebaseInit';
import {useState, useEffect} from 'react';

const db = firebase.firestore()

function ProjectCard({name, url, description, img, time}) {
    if (description.length > 140) {
        let desc = ''
        for (let i = 0; i < 77; i++) {
            desc += description[i]
        }
        description = desc + '...'
    }


    let diff_time = Date.now() - (time.seconds * 1000);
    let days = (diff_time - (diff_time % 86400000)) / 86400000;
    diff_time = diff_time - (days * 86400000);
    let hours = (diff_time - (diff_time % 3600000)) / 3600000;
    diff_time = diff_time - (hours * 3600000);
    let minutes = (diff_time - (diff_time % 60000)) / 60000;
    diff_time = diff_time - (minutes * 60000);
    let seconds = (diff_time - (diff_time % 1000)) / 1000;



    return (
        <div>
            <div className={styles.projCard}>
                <Image className={styles.projCardImg} src={img} width="300" height="300" />
                <div>
                    <h3 className={styles.projCardTitle}>{name}</h3>
                    <p className={styles.projCardDesc}>{description}</p>
                    <p className={styles.projCardTimeStamp}>{days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds</p>
                    <a href={`/post/${url}`}><button className={styles.projCardLink}>Learn More</button></a>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        db.collection("Projects").orderBy('createdAt').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                setRecent([...recent, (<ProjectCard name={data.name} url={doc.id} description={data.description} img={data.image} time={data.createdAt} />)])
            });
        })
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>VolunteerUP | Projects</title>
                <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
            </Head>
            <NavBar />
            <br />
            <br />
            <br />
            <h1 className={styles.projTitle}>Most Recent</h1>
            <div className={styles.slider}>
                {
                    recent.map((item) => {
                        return item;
                    })
                }
            </div>
            <h1 className={styles.projTitle}>Most Members</h1>
            <div className={styles.slider}>

            </div>
        </div>
    )
}

// St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases.
