import profile from "../assets/profile.png"

function Content(){
  return(
    <div className="h-[100%] flex justify-between overflow-hidden ">
      <div className="flex flex-col justify-center px-10">
        <p className="text-gray-600 font-semibold text-3xl">Hi, I'm Yogith D!</p>
        <p className="font-semibold text-[80px]"><span className="text-gray-600">Web </span><span className="text-purple-700">Designer</span></p>
        <p className="text-gray-600 text-base">"Artificial Intelligence isn't about trends, its about solving real problems with clarity and purpose."</p>
        <p className="text-gray-600 text-base pl-[88%] py-4">-Yogith.</p>
      </div>
      <img src={profile} className="h-[120%] mr-0"></img>
    </div>
  );
}

export default Content