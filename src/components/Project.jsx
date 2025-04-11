import React from "react";
import projectsData from "../Project/Project";
import { Bounce, ToastContainer, toast } from "react-toastify";


const Project = () => {
  const handleDetails = (id) => {
    console.log(`Project ID: ${id}`);
    toast.warn('This section of the page is undergoing maintainence, please try again later!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

  };

  return (
    <>
      <div className="project flex flex-col justify-center items-center">
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
        <h2 className="text-3xl sm:text-5xl p-2 heading">Projects</h2>
        <div className="h-1 w-[10vw] bg-purple-500 rounded-lg my-3"></div>
        <p className="description text-lg font-light text-[#4d5776] mx-5 sm:mr-[5vw] text-center my-[2vh] sm:my-[8vh] max-w-[800px]">
          Here you will find some of my projects that I have worked on. Each
          project showcases my skills and creativity in development. Feel free
          to explore them and reach out if you have any questions or feedback!
        </p>
        {/* Project container: 1 */}

        {projectsData.map((project) => (
          <div
            key={project.id}
            className="my-10 sm:my-20 project-card flex flex-wrap justify-around items-start gap-8 w-full"
          >
            {/* Project Image */}
            <div className="project-Img flex-col sm:flex-1 flex justify-center items-center">
              <img
                className="w-[90%] h-auto "
                src={project.img}
                alt="Project Thumbnail"
              />
            </div>

            {/* Project Title and Description */}
            <div className="project-about flex-1 flex flex-col justify-center items-start">
              <h1 className="sub-heading mx-5 sm:mr-[5vw] text-2xl font-bold mb-4">
                {project.name}
              </h1>
              <p className="description mx-5 sm:mr-[5vw] text-lg font-light text-[#4d5776]">
                {project.description}
              </p>
              <button
                onClick={()=> handleDetails(project.id)}
                className="ui-btn self-end mr-[8vw] mt-[8vh]"
              >
                <span>Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="division h-1 w-[60vw] mx-auto bg-gray-500 rounded-lg mt-12"></div>

    </>
  );
};

export default Project;
