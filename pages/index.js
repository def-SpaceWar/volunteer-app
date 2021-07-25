import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from './navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP</title>
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/865389806376321075/868312279517638736/hackathon_logo_2.png"/>
      </Head>
      <NavBar />
      <div className={styles.mainContainer}>
        <div className={styles.InfoContainer}>
          <h1 className={styles.cardTitle}>VolunteerUP</h1>
          <p>C'mon lets be real; without a community, life would be boring 🥱. Thats why we invented VolunteerUP, a way to give back to the community and make it a better place for everyone! 😃</p>
          <div className={styles.flexContainer}>
            <button className={styles.joinButton}><strong>Join Now!</strong></button>
            <div className={styles.hr}></div>
            <a href='/login'><button className={styles.signButton}><strong>Sign In!</strong></button></a>
          </div>
          <p className={styles.cardFooter}>Made with love by VolunteerUP Dev Team ❤️</p>
        </div>
        <div className={styles.svgContainer}>
          <img className={styles.svg} src="https://cdn.discordapp.com/attachments/865389806376321075/868326536883875890/undraw_elements_cipa.png" />
        </div>
      </div>
      <h1 className={styles.centerText}>Featured Non-Profit</h1>
      <div className={styles.mainNonProfitCard}>
        <img className={styles.CrossIcon} src="http://redcrossyouth.org/wp-content/uploads/2019/02/cropped-ARC_Logo_Bttn_Vert_RGB-e1549942783702.png"/> 
        <div>
          <h1 className={styles.cardSubTitle}>American Red Cross</h1>
          <p className={styles.cardSubDesc}>Each day, thousands of people like you provide compassionate care to those in need. Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here and all around the world.</p>
          <a href='https://www.redcross.org/about-us/news-and-events/news/We-Are-The-American-Red-Cross.html#:~:text=The%20American%20Red%20Cross%20is,million%20people%20across%20the%20globe.'><button className={styles.infoButton}><strong>Learn More</strong></button></a>
        </div>
      </div>
      <br />
      <div className={styles.mainNonProfitCard}>
        <img className={styles.CrossIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Black_Lives_Matter_logo.svg"/> 
        <div>
          <h1 className={styles.cardSubTitle}>Black Lives Matter</h1>
          <p className={styles.cardSubDesc}>Black Lives Matter (BLM), international social movement, formed in the United States in 2013, dedicated to fighting racism and anti-Black violence, especially in the form of police brutality.</p>
          <a href='https://blacklivesmatter.com/?__cf_chl_jschl_tk__=pmd_4dc86d849ef2b76f9436453ad9f2d22768e4b019-1627174953-0-gqNtZGzNAg2jcnBszQii'><button className={styles.info2Button}><strong>Learn More</strong></button></a>
        </div>
      </div>
      <br />
      <a className={styles.centerText} href="/featured-form"><p>Wanna be featured? Fill out this form</p></a>
    </div>
  )
} 