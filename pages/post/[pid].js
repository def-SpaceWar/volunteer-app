import { useRouter } from 'next/router'
import NavBar from '../navbar'
import styles from '../../styles/Infopage.module.css'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const imgSrc = 'https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj'
  const name = 'St. Judes'
  const description = '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'

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.postContainer}>
        <div className={styles.flexRow}>
          <img className={styles.postImage} src={imgSrc} />
          <div className={styles.postButtonContainer}>
            <h1 className={styles.postName}>{name}</h1>
            <button>Join Now</button>
            <br />
            <button>Share</button>
          </div>
        </div>
        <p className={styles.postDescription}>{description}</p>
      </div>
    </div>
  )
}

export default Post