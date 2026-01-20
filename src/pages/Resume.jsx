import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Resume(){
  return(
    <div className="min-h-screen">
      <Navigation
        showAbout={false}
        showProjects={false}
        showContact={false}
        showDownload={false}
      />
       <div className="w-full h-[calc(100vh-48px)]">
        <iframe
          src="/yogith_gowda_resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
      
    </div>
  );
}

export default Resume;