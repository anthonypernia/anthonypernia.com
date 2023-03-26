import styles from './Contact.module.scss';
import GithubImage from '@assets/icons/github-dark.png'
import LinkedinImage from '@assets/icons/linkedin-dark.png'
import TwitterImage from '@assets/icons/twitter-dark.png'
import InstagramImage from '@assets/icons/instagram-dark.png'
import Image from 'next/image';

const Contact = () => {

    const socialList = [
        {
            icon: GithubImage,
            url: 'https://github.com/anthonypernia'
        },
        {
            icon: LinkedinImage,
            url: 'https://www.linkedin.com/in/anthonypernia/'
        },
        {
            icon: TwitterImage,
            url: 'https://twitter.com/AnthonyPerniaH'
        },
        {
            icon: InstagramImage,
            url: 'https://www.instagram.com/anthonyperniah/'
        }
    ]


    return (
        <div className={styles.ContactContainer}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me on any of the platforms below.</p>
        <div className={styles.ContactIcons}>
            {socialList.map((social, index) => {
                return (
                    <a href={social.url} key={index} target="_blank" rel="noopener noreferrer" className={styles.ContactIcon}>
                        <Image src={social.icon} alt="social icon" width={30} height={30} />
                    </a>
                )
            })}
        </div>
        </div>
    )
}

export default Contact;
