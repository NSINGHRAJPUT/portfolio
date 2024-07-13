
import Layout from "./_Layout/Layout";
import About from "./about/page";
import ContactForm from "./contact/page";
import Experience from "./experience/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";
import Skills from "./skills/page";
import Subscribe from "./subscribe/page";

export default function Home() {
  return (
  <div className="bg-gray-800">
    <Layout>
     <About/>
     <Skills/>
     <Experience/>
     <Subscribe/>
     <Services/>
     <Portfolio/>
     <ContactForm/>
  </Layout>
  </div>
  );
}
