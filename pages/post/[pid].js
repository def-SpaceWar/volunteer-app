import {useRouter} from 'next/router'
import Image from 'next/image'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'
import ProjectCard from '../projects'

const db = [
    {
        pid: '129789y21635237',
        imgSrc: 'https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj',
        name: 'St. Judes',
        description: "St. Judes is an amazing organization working to research cancer and save childrens' lives!"
    }
]

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    let imgSrc = '/hackathon_logo.png'
    let name = 'Insert Name Here'
    let description = 'Insert Description Here'
    
    for (let i = 0; i < db.length; i++) {
        if (db[i].pid == pid) {
            imgSrc = db[i].imgSrc;
            name = db[i].name;
            description = db[i].description;
        }
    }

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
