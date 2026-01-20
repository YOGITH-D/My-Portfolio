import Navigation from "../components/navigation";
import Content from "../components/content";
import ProjectCard from "../components/projectcards";
import About from "../components/about";
import Footer from "../components/footer";

function Home() {
  return (
    <section id="home">
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white w-[90%] h-[80%] rounded-3xl overflow-hidden shadow-lg shadow-black">
          <Navigation />
          <Content />
        </div>
      </div>

      <About/>
      <ProjectCard/>
      <Footer/>
    </section>
  );
}

export default Home;
