// import Achievements from "@/components/Achievements";
import Achievements from "@/components/Achievements";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Skills/>
        <Experiences/>
        <Projects/>
        <Achievements/>
        <Footer/>
      </div>
      
    </main>
  );
}
