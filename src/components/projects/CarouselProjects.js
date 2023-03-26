import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./CarouselProjects.module.scss";
import Card from "./Card";

const CarouselProjects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);

  const getProjectsFromApi = async () => {
    const res = await fetch("https://api.github.com/search/repositories?q=topic:portfolio-anthony+user:anthonypernia&sort=updated&order=desc");
    const data = await res.json();
    saveProjectsInLocalStorage(data.items);
  };

  const saveProjectsInLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
    setProjects(projects);
  };

  const getProjectsFromLocalStorage = () => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (projects) {
      setProjects(projects);
      return projects;
    }
  };


  const getProjects = () => {
    const projects = getProjectsFromLocalStorage();
    if (!projects) {
      getProjectsFromApi();
    }
  };


  useEffect(() => {
    getProjects();
  }, []);


  const handleScroll = (scrollOffset) => {
    const containerWidth = carouselRef.current.clientWidth;
    const scrollWidth = carouselRef.current.scrollWidth;
    let newPosition = carouselRef.current.scrollLeft + scrollOffset;

    if (newPosition < 0) {
      newPosition = scrollWidth - containerWidth;
    } else if (newPosition >= scrollWidth - containerWidth) {
      newPosition = 0;
    }

    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  return (
    <div className={styles.CarouselMainContainer}>
      <div className={styles.CarouselTitleContainer}>
        <h2 className={styles.CarouselTitle}>Projects</h2>
      </div>
      
      <div className={styles.CarouselContainer} ref={carouselRef}>
        {projects && projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
      <div className={styles.CarouselButton}>
        <button className={styles.CarouselButtonPrev}
          onClick={() => handleScroll(-80)}
        >
        </button>
        <button className={styles.CarouselButtonNext}
          onClick={() => handleScroll(80)}
        >
        </button>
      </div>
    </div>
  );
};

export default CarouselProjects;
