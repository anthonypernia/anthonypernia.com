
import IconsSocial from './IconsSocial'
import styles from "./Footer.module.scss";

const FooterIconList = ({ socialMedia }) => {
    return (
        <div className={styles.FooterContainerIcons}>
            {socialMedia.map((social, index) => {
                return (
                    <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                        <IconsSocial icon={social.iconLight} />
                    </a>
                )
            })}
        </div>
    )
}

export default FooterIconList