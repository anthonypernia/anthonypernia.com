import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./CarouselProjects.module.scss";
import Card from "./Card";
import { PageContext } from '@context/ContextPage';
import { useContext } from 'react';


const CarouselProjects = () => {
  const { urlRepo } = useContext(PageContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);

  const getProjectsFromApi = async () => {
    const res = await fetch(urlRepo);
    const data = await res.json();
    saveProjectsInLocalStorage(data.items);
  };

  const saveProjectsInLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("lastUpdate", Date.now());
    setProjects(projects);
  };

  const getProjectsFromLocalStorage = () => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const lastUpdate = localStorage.getItem("lastUpdate");
    if (projects && lastUpdate) {
      const diffTime = Math.abs(Date.now() - lastUpdate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 3) {
        return projects;
      } else {
        localStorage.removeItem("projects");
        localStorage.removeItem("lastUpdate");
        return null;
      }
    }
  };


  const getProjects = () => {
    const projects = getProjectsFromLocalStorage();
    if (!projects) {
      getProjectsFromApi();
    }else{
      setProjects(projects);
    }
  };

  const activateGestures = () => {
    if (typeof window !== 'undefined') {
      const Hammer = require('hammerjs');
      const container = carouselRef.current;
      const hammer = new Hammer(container, { touchAction: 'pan-x' });

      let startX = 0;
      let scrollLeft = 0;

      hammer.on('panstart', (event) => {
        console.log(event);
        startX = event.changedPointers[0].clientX;
        scrollLeft = container.scrollLeft;
      });

      hammer.on('panmove', (event) => {
        console.log(event);
        const diffX = event.changedPointers[0].clientX - startX;
        container.scrollLeft = scrollLeft - diffX;
      });
    }
  }


  useEffect(() => {
    getProjects();
    activateGestures();
    // const container = carouselRef.current;
    // const hammer = new Hammer(container, { touchAction: 'pan-x' });
    // let startX = 0;
    // let scrollLeft = 0;
    // hammer.on('panstart', (event) => {
    //   startX = event.changedPointers[0].clientX;
    //   scrollLeft = container.scrollLeft;
    // });

    // hammer.on('panmove', (event) => {
    //   const diffX = event.changedPointers[0].clientX - startX;
    //   container.scrollLeft = scrollLeft - diffX;
    // });

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
    <div className={styles.CarouselMainContainer} id="PROJECTS">
      <div className={styles.CarouselTitleContainer}>
        <h2 className={styles.CarouselTitle}>Projects</h2>
        <h3 className={styles.CarouselSubtitle}>These are some of the projects I have developed to automate simple or complex tasks with python or other languages and frameworks.</h3>
      </div>
      
      <div className={styles.CarouselContainer} ref={carouselRef}>
        {projects && projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
      <div className={styles.CarouselButton}>
        <button className={styles.CarouselButtonPrev}
          onClick={() => handleScroll(-100)}
        >
        </button>
        <button className={styles.CarouselButtonNext}
          onClick={() => handleScroll(100)}
        >
        </button>
      </div>
    </div>
  );
};

export default CarouselProjects;
