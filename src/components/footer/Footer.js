
import styles from "./Footer.module.scss";
import FooterIconList from "./FooterIconList";
import GithubImage from '@assets/icons/github.png'
import LinkedinImage from '@assets/icons/linkedin.png'
import TwitterImage from '@assets/icons/twitter.png'
import InstagramImage from '@assets/icons/instagram.png'
import YoutubeImage from '@assets/icons/youtube.png'

const Footer = () => {

    const socialMedia = [
        {
            name: 'GitHub',
            url: 'https://github.com/anthonypernia',
            icon: GithubImage
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/anthonypernia/',
            icon:  LinkedinImage
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/AnthonyPerniaH',
            icon: TwitterImage
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/anthonyperniah/',
            icon: InstagramImage
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/@anthonypernia',
            icon: YoutubeImage
        }
    ]


    return (
        <footer id="footer" className={styles.Footer}>
        <div className={styles.FooterItemsCenter}>
            <div className={styles.FooterContainerText}>
                <h3>Anthony Pernia</h3>
                <h4>Software developer | Data engineer</h4>
                <h4>© {new Date().getFullYear()}</h4>
            </div>
            <FooterIconList socialMedia={socialMedia} />
        </div>
    </footer>
    )
}


export default Footer
