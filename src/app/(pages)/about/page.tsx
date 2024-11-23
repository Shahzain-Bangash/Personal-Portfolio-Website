import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";


const About = () => {
  return (
    <div className='my-6' id='about-sec'>
        <h1 className='text-gray-200 text-center mx-auto  w-20'><span className='border-b border-[#FD6F00] pb-[2px]'>About Me</span></h1>
      <section className='flex justify-between p-4 gap-x-6'>

            <div className='w-[50%] border border-white p-4'></div>
            <div className='w-[50%] rounded-md shadow-custom py-6 px-9'>
                <p className='text-gray-300 text-justify text-[0.95rem]'>
                    I am an aspiring Artificial Intelligence expert with a strong foundation in web development and a passion for emerging technologies like Generative AI, Web3, and the Metaverse. Proficient in tools like HTML, CSS, Tailwind CSS, TypeScript, Next.js, and Python, I combine technical skills with hands-on experience in sales, marketing, and client relations. Currently,I am developing my expertise in AI technologies, including OpenAI, LangChain, and Transformers, to create innovative solutions for global challenges. My goal is to leverage my skills to drive impactful change in the tech industry while continuously growing as a professional.
                </p>
                <button className="inline-block mt-6 bg-[#E46400] hover:text-gray-50 hover:bg-[#c9492c] text-[0.8rem] text-gray-200 w-[7.5rem] h-[1.7rem] rounded-md">
            <i className="fa-solid fa-download mr-2"></i>
            Download CV
      </button>
            </div>
      </section>
   
    </div>
  )
}

export default About
