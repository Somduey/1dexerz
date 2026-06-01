import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import me from './assets/me.png';
import ig from "./assets/ig.svg";
import github from "./assets/github.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import nodejs from "./assets/nodejs.svg";
import python from "./assets/python.svg";
import c from "./assets/c.svg";
import svelte from "./assets/svelte.svg";
import arduino from "./assets/arduino.svg";
import lua from "./assets/lua.svg";
import tailwind from "./assets/tailwind.svg";
import "./App.css";

function App() {
  const [skills, setskills] = useState({
    HTML: <img src={html} className="w-[16px] h-[16px]" alt="HTML" />,
    CSS: <img src={css} className="w-[16px] h-[16px]" alt="CSS" />,
    JavaScript: <img src={js} className="w-[16px] h-[16px]" alt="JavaScript" />,
    React: <img src={react} className="w-[16px] h-[16px]" alt="React" />,
    NodeJs: <img src={nodejs} className="w-[16px] h-[16px]" alt="NodeJs" />,
    "Svelte & SvelteKit": <img src={svelte} className="w-[16px] h-[16px]" alt="Svelte" />,
    "Arduino basics": <img src={arduino} className="w-[16px] h-[16px]" alt="Arduino" />,
    "Lua basic": <img src={lua} className="w-[16px] h-[16px]" alt="Lua" />,
    Python: <img src={python} className="w-[16px] h-[16px]" alt="Python" />,
    "C basics": <img src={c} className="w-[16px] h-[16px]" alt="C" />,
    "Tailwindcss": <img src={tailwind} className="w-[16px] h-[16px]" alt="Tailwind CSS" />,
  });

  return (
    <div
      id="container"
      className="[font-family:var(--font-kanit)] cursor-default flex justify-center overflow-y-auto w-screen h-screen"
    >
      <div
        id="bg"
        className="bg-[url('./assets/bg.png')] bg-[#111111] w-[541px] h-[984px] relative"
      >
        {/* Profile Image and name */}
        <img
          src={me}
          alt="ProfileImage"
          className="absolute top-[65px] left-[25px]"
          id="ProfileImage"
        />
        <h1 id="myName" className="text-white text-[24px] absolute top-[200px] left-[25px]">
          Nonthapat Thabphan
        </h1>
        <p className="text-[16px] text-white absolute top-[238px] left-[25px] font-light">
          1dexerz._
        </p>
        {/* Contact */}
        <div className="absolute top-[244px] left-[115px] flex gap-2">
          <FaInstagram id="fa-ig" className="text-white transition-transform hover:scale-110 cursor-pointer text-[16px]" onClick={()=>{window.open('https://www.instagram.com/1dexerz._/','_blank')}}/>
          <FaGithub id="fa-git" className="text-white transition-transform hover:scale-110 cursor-pointer text-[16px]" onClick={()=>{window.open('https://github.com/Somduey' ,'_blank')}}/>
        </div>
        {/* aboutMe */}
        <hr className="w-[541px] border-[#676767] absolute top-[276.5px]" />
        <div className="flex justify-center items-center gap-[6px] absolute top-[286px] left-[25px]">
          <h2 className="text-white text-[12px]">About me</h2>
          <FaCircleInfo className="text-white text-[10px] top-[1px] relative" />
        </div>
        <hr className="absolute w-[541px] border-[#676767] top-[314px]" />
        <h1
          id="aboutMeText"
          className="text-[#9A9A9A] w-[501px] h-[190px] text-[13px] absolute top-[322px] left-[25px]"
        >
          Hi, I'm Idea. I'm 16 years old and I enjoy programming and everything
          related to computers. I started learning out of pure curiosity — I
          wanted to understand how things work behind the screen — and that
          curiosity has grown into a real passion for building things with code.
          <br />
          I'm always eager to explore new technologies and dive into concepts
          that challenge me to think differently. Whether it's writing my first
          lines of code or figuring out how a system comes together, I find joy
          in the process of learning and creating. Right now, I'm focused on
          building my foundations in programming while keeping an open mind
          about where technology can take me. I believe that being young is an
          <br />
          advantage — there's so much still to discover, and I'm just getting
          started.
        </h1>
        {/* Technical skills */}
        <div id="technicalSkills">
          <h1 className="text-white text-[24px] absolute top-[535px] left-[25px]">
            Technical Skills
          </h1>
          <p className="text-white absolute top-[574px] left-[25px] font-light text-[16px]">
            Programming Languages
          </p>
          {/* slideBar */}
          <div className="absolute top-[610px] left-0 w-[541px] overflow-x-hidden">
            {" "}
            {/* wrapper: จำกัดขอบเขต */}
            <div id="scroll" className="flex items-center w-max">
              {[...Object.entries(skills), ...Object.entries(skills)].map(
                ([skill, image], index) => (
                  <p
                    key={index}
                    className="text-white gap-2 h-[25px] pt-1 pb-1 pe-3 pl-3 whitespace-nowrap text-[14px] bg-[#313131] flex justify-center items-center border-[#424242] border-[1px] rounded-[4px] mr-2"
                  >
                    {image}
                    {skill}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
        <div id="project">
          <hr className="w-[541px] border-[#676767] absolute top-[660px]" />
          <h1 className="text-white text-[20px] absolute top-[666px] left-[25px]">
            Project
          </h1>
          <hr className="w-[541px] border-[#676767] absolute top-[704px]" />
        </div>
        <div id="NoProject" className="h-[240px] w-[541px] absolute top-[704px] flex justify-center items-center border-b-[1px] border-[#676767]">
          <p className="text-center text-[13px] text-[#9A9A9A]">
            No project yet
            <br />
            I've been swamped with classes and haven't had time to work on one
            😭
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
