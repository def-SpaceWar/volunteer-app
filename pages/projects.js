import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import NavBar from './navbar'

function ProjectCard({name, url, description, img}) {
    if (description.length > 140) {
        let desc = ''
        for (let i = 0; i < 77; i++) {
            desc += description[i]
        }
        description = desc + '...'
    }
    return (
        <div>
            <div className={styles.projCard}>
                <Image className={styles.projCardImg} src={img} width="300" height="300" />
                <div>
                    <h3 className={styles.projCardTitle}>{name}</h3>
                    <p className={styles.projCardDesc}>{description}</p>
                    <a href={url}><button className={styles.projCardLink}>Learn More</button></a>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
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
            <h1 className={styles.projTitle}>Recent</h1>
            <div className={styles.slider}>
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
            </div>
            <h1 className={styles.projTitle}>Most Members</h1>
            <div className={styles.slider}>
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
            </div>
            <h1 className={styles.projTitle}>Other</h1>
            <div className={styles.slider}>
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
                <ProjectCard name="St Jude's" url='/post/129789y21635237' description="St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases." img='https://yt3.ggpht.com/ytc/AKedOLTJtWKMxZXxgvr20Oy0jglCSpxta-vVgnYJmI-kDg=s900-c-k-c0x00ffffff-no-rj' />
            </div>
        </div>
    )
}

// St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases.
