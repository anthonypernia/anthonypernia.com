import  NavBar  from '@components/navbar/NavBar'
import Meta from '@components/head/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from '@components/main-page/MainPage';
import Footer from '@components/footer/Footer';
import About from '@components/about/About';
import CarouselProjects from '@components/projects/CarouselProjects';
import Contact from '@components/contact/Contact';

export default function Home() {
  return (
    <div>
      <Meta />
      <NavBar />
      <MainPage/>
      <About/>
      <CarouselProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
