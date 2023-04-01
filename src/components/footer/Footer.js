
import styles from "./Footer.module.scss";
import FooterIconList from "./FooterIconList";
import GithubImage from '@assets/icons/github.png'
import LinkedinImage from '@assets/icons/linkedin.png'
import TwitterImage from '@assets/icons/twitter.png'
import InstagramImage from '@assets/icons/instagram.png'
import YoutubeImage from '@assets/icons/youtube.png'
import { PageContext } from '@context/ContextPage';
import { useContext } from 'react';

const Footer = () => {
    const { socialMedia } = useContext(PageContext);

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
