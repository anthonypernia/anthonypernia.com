import Image from "next/image";
import styles from "./Card.module.scss";

const Card = ({ project }) => {
    const ImageLoader = ({ src, width, quality }) => {
        let dataImage = `${src}`;
        return `${dataImage}`;
    };

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/-/g, " ");
        //capitalize first letter of each word
        formattedTitle = formattedTitle.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        return formattedTitle;
    };

    const formatDescription = (description) => {
        let formattedDescription = description;
        if (description.length > 200) {
            formattedDescription = description.substring(0, 200) + "...";
        }
        return formattedDescription;
    };

    const clickOnRepo = (url) => {
        window.open(url, "_blank");
    };


    return (
        <div className={styles.Card} key={project.id}>
            <div className={styles.CardTitleContainer}>
            <p className={styles.CardTitle}>{formatTitle(project.name)}</p>
            </div>
            <div className={styles.CardImageContainer}>
                <Image
                    className={styles.CardImage}
                    loader={ImageLoader}
                    src={`https://raw.githubusercontent.com/anthonypernia/${project.name}/master/img_preview/preview.png`}
                    alt={`Image for ${project.name}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.CardDescription}>
                <p>{formatDescription(project.description)}</p>
            </div>
            <div className={styles.CardButtonContainer}>
                <button className={styles.CardButton} onClick={() => clickOnRepo(project.html_url)}>
                    View More
                </button>
            </div>

        </div>
    );
};

export default Card;
