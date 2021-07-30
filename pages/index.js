import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VolunteerUP | Home</title>
        <meta
          name="description"
          content="Post & Join Volunteer groups! Helping is happiness!"
        />
        <link rel="icon" href="/hackathon_logo.png" />
      </Head>
      <NavBar />
      <br />
      <br />
      <br />
      <div className={styles.mainContainer}>
        <div className={styles.InfoContainer}>
          <h1 className={styles.cardTitle}>VolunteerUP</h1>
          <p>
            C&apos;mon lets be real; without a community, life would be boring
            🥱. Thats why we invented VolunteerUP, a way to give back to the
            community and make it a better place for everyone! 😃
          </p>
          <div className={styles.flexContainer}>
            <a href="/signup">
              <button className={styles.joinButton}>
                <strong>Join Now!</strong>
              </button>
            </a>  
            <div className={styles.hr}></div>
            <a href="/login">
              <button className={styles.signButton}>
                <strong>Sign In!</strong>
              </button>
            </a>
          </div>
          <p className={styles.cardFooter}>
            Made with love by VolunteerUP Dev Team ❤️ 
          </p>
        </div>
        <div className={styles.svgContainer}>
          <Image
            className={styles.svg}
            src="https://cdn.discordapp.com/attachments/865389806376321075/868326536883875890/undraw_elements_cipa.png"
            width="750"
            height="550"
          />
        </div>
      </div>
      <br />
      <h1 className={styles.centerText}>Featured Non-Profit</h1>

      <div className={styles.mainNonProfitCard}>
        <Image
          className={styles.CrossIcon}
          src="http://redcrossyouth.org/wp-content/uploads/2019/02/cropped-ARC_Logo_Bttn_Vert_RGB-e1549942783702.png"
          width="300"
          height="300"
        />
        <div>
          <h1 className={styles.cardSubTitle}>American Red Cross</h1>
          <p className={styles.cardSubDesc}>
            Each day, thousands of people like you provide compassionate care to
            those in need. Our network of generous donors, volunteers and
            employees share a mission of preventing and relieving suffering,
            here and all around the world.
          </p>
          <a href="https://www.redcross.org/about-us/news-and-events/news/We-Are-The-American-Red-Cross.html#:~:text=The%20American%20Red%20Cross%20is,million%20people%20across%20the%20globe.">
            <button className={styles.infoButton}>
              <strong>Learn More</strong>
            </button>
          </a>
        </div>
      </div>
      <div className={styles.mainNonProfitCard}>
        <Image
          className={styles.CrossIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Black_Lives_Matter_logo.svg"
          width="250"
          height="250"
        />
        <div>
          <h1 className={styles.cardSubTitle}>Black Lives Matter</h1>
          <p className={styles.cardSubDesc}>
            Black Lives Matter (BLM), international social movement, formed in
            the United States in 2013, dedicated to fighting racism and
            anti-Black violence, especially in the form of police brutality.
          </p>
          <a href="https://blacklivesmatter.com/?__cf_chl_jschl_tk__=pmd_4dc86d849ef2b76f9436453ad9f2d22768e4b019-1627174953-0-gqNtZGzNAg2jcnBszQii">
            <button className={styles.info2Button}>
              <strong>Learn More</strong>
            </button>
          </a>
        </div>
      </div>

      <center>
        <Link href="/projects">
          <button className={styles.info3Button}>
            <strong>More Projects</strong>
          </button>
        </Link>

        <div className={styles.footerText}>
          <Link href="/featured-form">
            <p>Wanna be featured? Fill out this form</p>
          </Link>
        </div>
      </center>
    </div>
  );
}
