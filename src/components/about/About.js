import styles from "./About.module.scss";
import Image from "next/image";
import Profile from "@assets/images/profile.png";

const About = () => {
  return (
    <div className={styles.AboutContainer} id="ANTHONY PERNIA">
      <div className={styles.AboutItemContainer}>
        <div className={styles.AboutTextContainer}>
          <h2>Hi!</h2>
          <p>I am Anthony Pernia, Electronic Engineer, passionate about software development and currently focused on Big data, working as a Data Engineer.</p>
          <p>In my experience, I've had the opportunity to work with many areas and work with backend and infrastructure tools in on-premise and cloud environments, which has given me a comprehensive view of the processes.</p>
          <p>I love the idea of building things with software, and even more so if they were considered impossible before, that's the reason why I always try to learn new things and share my knowledge and my code with the community.</p>
        </div>
        <div className={styles.AboutImageContainer}>
          <Image src={Profile} alt="Profile" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default About;
