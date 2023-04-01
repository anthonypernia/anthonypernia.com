import styles from './Contact.module.scss';
import GithubImage from '@assets/icons/github-dark.png'
import LinkedinImage from '@assets/icons/linkedin-dark.png'
import TwitterImage from '@assets/icons/twitter-dark.png'
import InstagramImage from '@assets/icons/instagram-dark.png'
import YoutubeImage from '@assets/icons/youtube-dark.png'
import Image from 'next/image';
import { PageContext } from '@context/ContextPage';
import { useContext } from 'react';

const Contact = () => {
    const { socialMedia } = useContext(PageContext);

    return (
        <div className={styles.ContactContainer} id="CONTACT">
        <h2>Contact</h2>
        <p>Feel free to reach out to me on any of the platforms below.</p>
        <div className={styles.ContactIcons}>
            {socialMedia.map((social, index) => {
                return (
                    <a href={social.url} key={index} target="_blank" rel="noopener noreferrer" className={styles.ContactIcon}>
                        <Image src={social.iconDark} alt="social icon" width={30} height={30} />
                    </a>
                )
            })}
        </div>
        </div>
    )
}

export default Contact;
