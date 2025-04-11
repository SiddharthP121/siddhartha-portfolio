import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen my-[10vh] px-6">
        {/* Heading Section */}
        <div className="heading-con flex flex-col justify-center items-center w-full">
          <h2 className="text-3xl sm:text-5xl p-2 heading">About Me</h2>
          <div className="h-1 w-[10vw] bg-purple-500 rounded-lg my-3"></div>
          <p className="description text-lg font-light text-[#4d5776] text-center my-[2vh] sm:my-[8vh] max-w-[800px]">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>

        <div className="content-container mt-[5vh] flex flex-wrap justify-around items-start gap-8">
          {/* Left Section: About Me */}
          <div className="left max-w-[500px]">
            <h1 className="sub-heading text-2xl font-bold mb-4">Get to Know Me!</h1>
            <p className="text-lg font-light text-[#4d5776]">
              I am a passionate{" "}
              <span className="font-semibold">Full-Stack MERN Developer</span>{" "}
              currently focused on building web pages and websites. I am also
              looking forward to learning API development to expand my backend
              expertise.
            </p>
            <p className="text-lg font-light text-[#4d5776] mt-4">
              I enjoy turning ideas into reality using code and am always eager
              to learn new technologies and improve my skills.
            </p>
            <button className="cta flex items-center justify-center gap-2 rounded-full bg-[#0a192f] px-6 py-3 text-white transition duration-300 ease-in-out hover:bg-[#4d5776] group">
              <span><a href="#contact">Contact</a></span>
              <lord-icon
                src="https://cdn.lordicon.com/vcdutftw.json"
                trigger="hover"
                colors="primary:#000000"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </button>
          </div>

          {/* Right Section: My Skills */}
          <div className="right max-w-[500px]">
            <h1 className="sub-heading text-2xl font-bold mb-1.5 sm:mb-4">My Skills</h1>
            <div className="skills flex flex-wrap gap-3 mt-[12vh]">
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                HTML
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                CSS
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                JavaScript
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                ReactJS
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                NodeJS
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                ExpressJS
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                MongoDB
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                TailwindCSS
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                C/Cpp
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                PHP
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                Git
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                GitHub
              </span>
              <span className="button-55 px-4 py-2 bg-purple-500 text-white rounded-lg">
                Responsive Design
              </span>
            </div>
           
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default About;
