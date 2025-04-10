import React from 'react'

const Project = () => {
  return (
    <>

    <div className="project flex flex-col justify-center items-center ">
     <h2 className="text-5xl p-2 heading">Projects</h2>
          <div className="h-1 w-[10vw] bg-purple-500 rounded-lg my-3"></div>
          <p className="description text-lg font-light text-[#4d5776] text-center my-[2vh] sm:my-[8vh] max-w-[800px]">
            Here you will find some of my projects that I have worked on. Each project showcases my skills and creativity in development. Feel free to explore them and reach out if you have any questions or feedback!
          </p>

          <div className="project-card">
            <div className="project-Img">
              <img src="" alt="" />
            </div>
            <div className="project-about">
              <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
              <p className="text-lg font-light text-[#4d5776]">
                This is a brief description of the project. It highlights the main features and technologies used in the project.
              </p>
            </div>
          </div>
    </div>
        
    </>
  )
}

export default Project
