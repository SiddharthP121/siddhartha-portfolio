import React from "react";

const Project = () => {
  return (
    <>
      <div className="project flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl p-2 heading">Projects</h2>
        <div className="h-1 w-[10vw] bg-purple-500 rounded-lg my-3"></div>
        <p className="description text-lg font-light text-[#4d5776] mx-5 sm:mr-[5vw] text-center my-[2vh] sm:my-[8vh] max-w-[800px]">
          Here you will find some of my projects that I have worked on. Each
          project showcases my skills and creativity in development. Feel free
          to explore them and reach out if you have any questions or feedback!
        </p>
         {/* Project container: 1 */}
        
         <div className="my-10 sm:my-20 project-card flex flex-wrap justify-around items-start gap-8 w-full">
          {/* Project Image */}
          <div className="project-Img flex-col sm:flex-1 flex justify-center items-center">
            <img
              className="w-[90%] h-auto "
              src="https://github.com/SiddharthP121/siddhartha-portfolio/blob/main/public/assets/protfolio.png?raw=true"
              alt="Project Thumbnail"
            />
          </div>

          {/* Project Title and Description */}
          <div className="project-about flex-1 flex flex-col justify-center items-start">
            <h1 className="sub-heading mx-5 sm:mr-[5vw] text-2xl font-bold mb-4">
             {"Portfolio -- Siddharth Potphode "}
            </h1>
            <p className="description mx-5 sm:mr-[5vw] text-lg font-light text-[#4d5776]">
             This page is deployed on github pages and uses ReactJS (for frontend), NodeJS, ExpressJS (for backend) Tailwind CSS (for designs and responsiveness). The page depict the my overall progress, work and skills that I have learned. Various type of animated icons and buttons are used to make the good forntend and feel you modern. The code is updated on Git-hub and is open for all. For more info visit the project details page.
            </p>
            <button className="ui-btn self-end mr-[8vw] mt-[8vh]">
              <span>Details</span>
            </button>
          </div>
        </div>


        

        {/* Project container: 2 */}
        <div className="project-card my-10 sm:my-20 flex flex-wrap justify-around items-start gap-8 w-full">
          {/* Project Image */}
          <div className="project-Img flex-col sm:flex-1 flex justify-center items-center">
            <img
              className="w-[90%] h-auto "
              src="https://github.com/SiddharthP121/siddhartha-portfolio/blob/main/public/assets/We-con.png?raw=true"
              alt="Project Thumbnail"
            />
          </div>

          {/* Project Title and Description */}
          <div className=" project-about flex-1 flex flex-col justify-center items-start">
            <h1 className="sub-heading mx-5 sm:mr-[5vw] text-2xl font-bold mb-4">
              {"We-Con -- Connect the people worldwide"}
            </h1>
            <p className="description mx-5 sm:mr-[5vw] text-lg font-light text-[#4d5776]">
              We-Con is basically a social media plateform prototype. It is ReactJS based project with tailwind CSS implemented. The page has fully functional Login and Signup page which allows the user to register and make their account on it. The page is responsive and has a good UI. The page is built using ReactJS (for frontend), NodeJS, ExpressJS (for backend) Tailwind CSS (for designs and responsiveness). The page code is updated on GitHub. For more info visit the project details page.
            </p>
            <button className="ui-btn self-end mr-[8vw] mt-[8vh]">
              <span>Details</span>
            </button>
          </div>
        </div>


        {/* Project container: 3 */}
        
        <div className="my-10 sm:my-20 project-card flex flex-wrap justify-around items-start gap-8 w-full">
          {/* Project Image */}
          <div className="project-Img flex-col sm:flex-1 flex justify-center items-center">
            <img
              className="w-[90%] h-auto "
              src="https://github.com/SiddharthP121/siddhartha-portfolio/blob/main/public/assets/Passmanager.png?raw=true"
              alt="Project Thumbnail"
            />
          </div>

          {/* Project Title and Description */}
          <div className="project-about flex-1 flex flex-col justify-center items-start">
            <h1 className="sub-heading mx-5 sm:mr-[5vw] text-2xl font-bold mb-4">
             {" Save-Pass -- Manage your passwords"}
            </h1>
            <p className="description mx-5 sm:mr-[5vw] text-lg font-light text-[#4d5776]">
              Save-Pass is a password manager that allows users to securely
              store and manage their passwords. It uses encryption to protect
              sensitive information and provides a user-friendly interface for
              easy access. The application is built using the MERN stack,
              ensuring a robust and scalable solution for password management.
              Passwords and the site data are stored in local storage. For more
              info visit the project details page.
            </p>
            <button className="ui-btn self-end mr-[8vw] mt-[8vh]">
              <span>Details</span>
            </button>
          </div>
        </div>



        {/* Project container: 4 */}
        
        <div className="my-10 sm:my-20 project-card flex flex-wrap justify-around items-start gap-8 w-full">
          {/* Project Image */}
          <div className="project-Img flex-col sm:flex-1 flex justify-center items-center">
            <img
              className="w-[90%] h-auto "
              src="https://github.com/SiddharthP121/siddhartha-portfolio/blob/main/public/assets/netflix.png?raw=true"
              alt="Project Thumbnail"
            />
          </div>

          {/* Project Title and Description */}
          <div className="project-about flex-1 flex flex-col justify-center items-start">
            <h1 className="sub-heading mx-5 sm:mr-[5vw] text-2xl font-bold mb-4">
             {"Netflix (Clone) -- Watch Movies Online"}
            </h1>
            <p className="description mx-5 sm:mr-[5vw] text-lg font-light text-[#4d5776]">
             This is a single web page design to basically practice my HTML and CSS skills. It is a clone of the Netflix page. I've learned various and different type of basic concepts of CSS and HTML. The page is responsive and has a good UI. The page is built using HTML, CSS. The page code is updated on GitHub. For more info visit the project details page.
            </p>
            <button className="ui-btn self-end mr-[8vw] mt-[8vh]">
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
