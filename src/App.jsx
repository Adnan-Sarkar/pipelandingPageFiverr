import AboutUs from "./components/shered/AboutUs/AboutUs";
import Benefits from "./components/shered/Benefits/Benefits";
import ContactUs from "./components/shered/ContactUs/ContactUs";
import FAQ from "./components/shered/FAQ/FAQ";
import Footer from "./components/shered/Footer/Footer";
import Hero from "./components/shered/Hero/Hero";
import Navbar from "./components/shered/Navbar/Navbar";
import Services from "./components/shered/Services/Services";
import WhyChoose from "./components/shered/WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <WhyChoose />
      <Services />
      <AboutUs />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
