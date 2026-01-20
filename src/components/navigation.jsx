import { Link,useNavigate } from "react-router-dom";

function Navigation({
  showAbout = true,
  showProjects = true,
  showContact=true,
  showDownload = true
}){
  const navigate=useNavigate();
  return(
    <nav className="flex justify-between items-center h-12 bg-gray-200 text-gray-500 px-12">
      <span className="text-gray-600 text-2xl font-medium">Yogith D</span>
      <ul className="flex gap-8">
        <li><Link to="/">Home</Link></li>
        {showAbout && <li><a href="#about">About</a></li>}
        {showProjects &&<li><a href="#projects">Projects</a></li>}
        {showContact && <li><a href="#contact">Contact</a></li>}
      </ul>
      {showDownload && <button className="bg-gray-800 text-white px-4 py-1 rounded-md" onClick={()=>navigate("/cv")}>Open CV</button>}
      {!showDownload && <a href="/yogith_gowda_resume.pdf" download className="bg-gray-800 text-white px-4 py-1 rounded-md">Download CV</a>}
    </nav>
  );
}

export default Navigation