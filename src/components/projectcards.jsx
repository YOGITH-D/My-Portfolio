import mining from "../assets/mining.png"
import community from "../assets/community.png"
import rockpaper from "../assets/rockpaper.png"
import Agrimind from "../assets/Agrimind.png"



function ProjectCard(){
  return(
    <section id="projects">
      <div className="px-24 text-white">
        <p className=" pt-10 pb-10 text-5xl font-semibold underline underline-offset-[14px]">Projects</p>
        <div className="w-[100%] flex gap-16 ">
          <div className="flex-1 h-80 min-w-[250px] bg-white mb-[100px] rounded-xl overflow-hidden flex flex-col items-center shadow-black shadow-xl transition-transform duration-300 ease-out hover:scale-105">
            <img src={mining} className="h-[60%] w-full object-contain mt-4  px-3"></img>
            <p className="text-black font-bold mt-[10px] text-[20px]">Kaizen Geo Framework</p>
            <button className="bg-gray-800 w-[50%] h-auto min-h-[40px] mt-[5px] rounded-md px-3 font-semibold"><a href="https://github.com/YOGITH-D/KGF">&lt;view code&gt;</a></button>
          </div>
          <div className="flex-1 h-80 min-w-[250px] bg-white mb-[100px] rounded-xl flex flex-col items-center shadow-black shadow-xl transition-transform duration-300 ease-out hover:scale-105">
            <img src={community} className="h-[60%] w-full object-contain mt-4  px-3"></img>
            <p className="text-black font-bold mt-[10px] text-[20px]">Shop Local</p>
            <button className="bg-gray-800 w-[50%] h-auto min-h-[40px] mt-[5px] rounded-md px-3 font-semibold"><a href="https://github.com/YOGITH-D/Shop-Local">&lt;view code&gt;</a></button>
          </div>
          <div className="flex-1 h-80 min-w-[250px] bg-white mb-[100px] rounded-xl flex flex-col items-center shadow-black shadow-xl transition-transform duration-300 ease-out hover:scale-105">
            <img src={Agrimind} className="h-[60%] w-full object-contain mt-4  px-3"></img>
            <p className="text-black font-bold mt-[10px] text-[20px]">Agri Mind</p>
            <button className="bg-gray-800 w-[50%] h-auto min-h-[40px] mt-[5px] rounded-md px-3 font-semibold"><a href="https://github.com/YOGITH-D/AgriMind">&lt;view code&gt;</a></button>
          </div>
          <div className="flex-1 h-80 min-w-[250px] bg-white mb-[100px] rounded-xl flex flex-col items-center shadow-black shadow-xl transition-transform duration-300 ease-out hover:scale-105">
            <img src={rockpaper} className="h-[60%] w-full object-contain mt-3 px-3"></img>
            <p className="text-black font-bold mt-[10px] text-[20px]">Rock Paper Scissors</p>
            <button className="bg-gray-800 w-[50%] h-auto min-h-[40px] mt-[5px] rounded-md px-3 font-semibold"><a href="https://github.com/YOGITH-D/Rock-Paper-Scissors">&lt;view code&gt;</a></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;