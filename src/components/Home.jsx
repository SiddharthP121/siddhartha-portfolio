import React from "react";

const Home = () => {
  return (
    <div className="pt-20">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="home w-full">
        <div className="heading flex flex-col items-center justify-center py-[15vh] text-center text-[#0a192f]">
          <span className="flex name-con text-6xl font-bold text-[#0a192f]">
            Hey! I am Siddharth Potphode
          </span>
          <span className="subheading text-xl mt-4 mb-2">
            "Shaping Ideas Into Reality: Web Dev & Android Explorer"
          </span>
          <br />
          <span className="description text-lg font-light text-[#4d5776] max-w-[900px]">
            I'm passionate about full-stack web development and currently honing
            my skills in creating dynamic, user-friendly websites. As I continue
            to grow, I'm excited to dive into Android development, expanding my
            expertise and embracing challenges in mobile app creation.
          </span>
        </div>
      </div>
      <button className="cta flex items-center justify-center gap-2 rounded-full bg-[#0a192f] px-6 py-3 text-white transition duration-300 ease-in-out hover:bg-[#4d5776] group">
        <span>PROJECTS</span>
        <lord-icon
          src="https://cdn.lordicon.com/gvtjlyjf.json"
          trigger="loop-on-hover"
          colors="primary:#000000"
          style={{ width: "35px", height: "24px" }}
        ></lord-icon>
      </button>
    </div>
  );
};

export default Home;