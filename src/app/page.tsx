import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Testimonials from "./component/Testimonials";
import HireMe from "./component/HireMe";
// import ContactPage from "./contactPage"

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <HireMe/>
      {/* <ContactPage/> */}
    </div>

  );
}