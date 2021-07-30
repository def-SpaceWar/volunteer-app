import Image from 'next/image'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'
import database from '../firebaseInit'
import LocalStorage from '../localStorage'
import {useState, useEffect} from 'react'

const db = database.firestore()

export function getServerSideProps(context) {
    return {
        props: {params: context.params}
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

const Post = ({params}) => {
    let data;
    let [global, setGlobal] = useState({
        imgSrc: '/hackathon_logo.png',
        name: '404',
        description: 'This project isnt found',
        location: 'Your Mom\'s House'
    });

    const [localStorage, setLocalStorage] = useState(false);
    const [joined, setJoined] = useState(false);

    useEffect(function () {
        const localStorageInstance = new LocalStorage(window);
        setLocalStorage(localStorageInstance);
        if (localStorageInstance.isLoggedIn()) {
            let data, doc;
            db.collection("Projects").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id == pid) {
                        data = doc.data();
                        doc = doc;
                        db.collection("Projects").doc(doc.id).update({
                            views: data.views + 1
                        });
                        checkIfJoined(doc.id, localStorageInstance);
                    }
                });
            });

        }
    }, []);

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

    function checkIfJoined(id, ls) {
        const result = db.collection("Joins").where("email", "==", ls.getItem('loginEmail'))
            .onSnapshot((snapshot) => {
                snapshot.forEach((userSnapshot) => {
                    let data = userSnapshot.data()
                    if (data.groupId == id) {
                        setJoined(true);
                    }
                });
            });
    }


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
                                return;
                            }

                            if (!joined && localStorage) {
                                db.collection("Joins").add({
                                    groupId: pid,
                                    email: localStorage.getItem('loginEmail')
                                });
                            } else if (joined && localStorage) {
                                db.collection("Joins")
                                    .where("groupId", "==", pid)
                                    .onSnapshot((snapshot) => {
                                        snapshot.forEach((userSnapshot) => {
                                            let data = userSnapshot.data()
                                            data.id = userSnapshot.id;
                                            if (data.email == localStorage.getItem("loginEmail")) {
                                                let id = data.id;
                                                db.collection("Joins").doc(`${id}`).delete().then(() => {
                                                    console.log("Document successfully deleted!");
                                                    setJoined(false);
                                                }).catch((error) => {
                                                    console.error("Error removing document: ", error);
                                                });
                                            }
                                        });
                                    });
                            }
                        }}>{localStorage && localStorage.isLoggedIn() ? joined && joined ? 'Leave' : 'Join' : 'Sign In To Join!'}</button>
                        <br />
                        <a href="https://twitter.com/intent/tweet?text=VolunteerUP%20helped%20me%20find%20MY%20nonprofit%20of%20choice%20check%20them%20out%20right%20here!%20=%3E&url= http://localhost:3000/" target="popup"><button className={styles.postButton} >Share</button></a>
                    </div>
                </div>
                <p className={styles.postDescription}>{global.description}</p>
            </div>
        </div >
    )
}

export default Post
