import React from 'react'

function ResumeRight() {
  return (
    <div className="resumeRight w-[65%] h-[1055px] bg-white flex items-start justify-start flex-col text-[#1b3048] font-bold text-xl p-2 pr-4">
    <div className="rightTop user w-full ml-2 mt-6">
      <p className='text-2xl'>ANIKET WAKALKAR</p>
      <p className='text-xl'>Software Developer</p>
      <p className='mt-1 mb-3 font-normal' style={{fontSize:"16px"}}> 
      + Software engineer with experience in designing, developing, and implementing software solutions for a variety of industries.
      <br />+ Proficient in multiple programming languages, with a strong background in software architecture, database management, and system integration.
      <br />+ Strong problem-solving abilities and a commitment to continuous learning and professional growth.
      </p>
    </div>
    <div className='rightBottom w-full'>
      <div className="education w-full ml-2 mt-3">
        <p style={{borderBottom:"1px solid black"}} className="pb-2 text-xl">Education</p>
        <ul className='my-1 font-normal ml-2' style={{fontSize:"16px"}}>
          <li className='my-2'>
            <h5><span className="mr-2" style={{fontSize:"18px"}}>&bull;</span><span className='font-bold'>B.E. [2021 - 2023]</span></h5>
            <div className="content pl-4">
              <p className='font-bold'>Wainganga College of Engineering and Management</p>
              <p>Near Gumgaon Railway Station, Dongargaon, Post-Gumgaon, Wardha Road, Nagpur, Maharashtra 440012</p>
            </div>
          </li>
          <li className='my-2'>
            <h5><span className="mr-2" style={{fontSize:"18px"}}>&bull;</span><span className='font-bold'>Diploma [2017 - 2020]</span></h5>
            <div className="content pl-4">
              <p className='font-bold'>Shri Datta Meghe Polytechnic</p>
              <p>Hingna Rd, beside YCCE college, Wanadongri ct, Wanadongri, Maharashtra 441110</p>
            </div>
          </li>
          <li className='my-2'>
            <h5><span className="mr-2" style={{fontSize:"18px"}}>&bull;</span><span className='font-bold'>12th [2015 - 2017]</span></h5>
            <div className="content pl-4">
              <p className='font-bold'>Radha Mahavidyalaya</p>
              <p>Reshimbagh Rd, Reshim Bagh, Nagpur, Maharashtra 440009</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="experience w-full ml-2 mt-3">
        <p style={{borderBottom:"1px solid black"}} className="pb-2 text-xl">Experience</p>
        <ul className='my-1 font-normal ml-2' style={{fontSize:"16px"}}>
          <li className='my-2'>
            <h5><span className="mr-2" style={{fontSize:"18px"}}>&bull;</span><span className='font-bold'>CAREDOSE [2023 - Present]</span></h5>
            <div className="content pl-4">
              <p className='font-bold'>Software Developer</p>
              <p>
              + Developed scalable web applications using Python, Flask and PostgreSQL, resulting in improved user experience and increased customer engagement. <br />
              + Implemented automated testing processes and continuously integrated new features to enhance product quality and performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ResumeRight