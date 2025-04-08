import React from 'react'

const About = () => {
  return (
    <>
    <div className='min-h-screen my-[10vh]'>
        
      <div className="heading-con flex flex-col justify-center items-center w-full">
        <h2 className='text-5xl p-2 heading'>About me</h2>
        <div className='h-1 w-[10vw] bg-purple-500 rounded-lg my-3'></div>
        <p className='description text-lg font-light text-[#4d5776]  px-7 my-[8vh]'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className="contant-container flex justify-around ">
        <div className="left flex flex-col justify-center items-start">
          <div className="left-head">
            <h1 className='text-2xl' >Get to know me!</h1>
            <p className="text-lg font-light text-[#4d5776]">
              I am a passionate <span className="font-semibold">Full-Stack MERN Developer</span> currently focused on building web pages and websites. 
              I am also looking forward to learn API development to expand my backend expertise.
            </p>
            <p className="text-lg font-light text-[#4d5776] mt-4">
              I enjoy turning ideas into reality using code and am always eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
        <div className="right">
          <div className='icons'>
            <span><img src="public\assets\html.jpeg" alt="" /></span>
            <span><img src="public\assets\css.jpeg" alt="" /></span>
            <span><img src="public\assets\js.png" alt="" /></span>
          </div>
        </div>
      </div>

    </div>

    </>
  )
}

export default About
