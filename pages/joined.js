import NavBar from './navbar'
import styles from '../styles/Projects.module.css'
import database from '../public/firebaseInit'
import LocalStorage from '../public/localStorage'
import {useState, useEffect} from 'react'
import {ProjectCard} from './projects'

const db = database.firestore()

const Post = () => {
    const [joinedGroups, setJoinedGroups] = useState([]);
    const [localStorage, setLocalStorage] = useState(false);


    useEffect(() => {
        const localStorageInstance = new LocalStorage(window);
        setLocalStorage(localStorageInstance);
        if (!localStorageInstance.isLoggedIn()) {
            window.location.replace('/login')
        }

        db.collection("Joins").where("email", "==", localStorageInstance.getItem('loginEmail'))
            .onSnapshot((snapshot) => {
                snapshot.forEach((userSnapshot) => {
                    let data = userSnapshot.data()
                    let groupId = data.groupId;
                    db.collection("Projects").doc(groupId)
                        .get()
                        .then(function (doc) {
                            let data = doc.data();
                            setJoinedGroups(joinedGroups => [...joinedGroups, (<ProjectCard key={doc.id} name={data.name} url={doc.id} description={data.description} img={data.image} time={data.createdAt} />)])
                        }).catch(function (error) {
                            console.log("Error getting document:", error);
                        });
                });
            });
    }, [])



    return (
        <div className={styles.container} >
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.joinedGrid}>
                {
                    joinedGroups.map((item) => {
                        return item;
                    })
                }
            </div>
        </div>
    )
}

export default Post
