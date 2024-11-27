import Hero from "./component/Hero";
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
      <Skills/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <HireMe/>
      {/* <ContactPage/> */}
    </div>

  );
}