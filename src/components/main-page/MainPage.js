import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.MainPage} id='HOME'>
      <div className={styles.MainPageTextContainer}>
        <div className={styles.MainPageFirstTextContainer}>
          <h2>Hi! I'm</h2>
          <h1>Anthony Pernia</h1>
        </div>
        <div className={styles.MainPageSecondTextContainer}>
          <h2>Data Engineer and Software Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
