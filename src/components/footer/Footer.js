
import styles from "./Footer.module.scss";
import FooterIconList from "./FooterIconList";
import GithubImage from '@assets/icons/github.png'
import LinkedinImage from '@assets/icons/linkedin.png'
import TwitterImage from '@assets/icons/twitter.png'
import InstagramImage from '@assets/icons/instagram.png'


const Footer = () => {

    const socialMedia = [
        {
            name: 'GitHub',
            url: '',
            icon: GithubImage
        },
        {
            name: 'Linkedin',
            url: '',
            icon:  LinkedinImage
        },
        {
            name: 'Twitter',
            url: '',
            icon: TwitterImage
        },
        {
            name: 'Instagram',
            url: '',
            icon: InstagramImage
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
