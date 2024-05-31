import React from 'react'
const roadmaps =[
    {
        text :"Mechanical Core",
        link :"https://spo.iitk.ac.in/assets/Roadmap_ME.pdf",
    },
    {
        text :"Electrical core",
        link :"https://spo.iitk.ac.in/assets/Roadmap_EE.pdf",
    },
    {
        text :"Analyst",
        link :"https://spo.iitk.ac.in/assets/Roadmap_Analytics.pdf",
    }, {
        text :"Product Management",
        link :"https://spo.iitk.ac.in/assets/Roadmap_PM.pdf",
    }, {
        text :"SDE",
        link :"https://spo.iitk.ac.in/assets/Roadmap_SDE.pdf",
    }, 
    {
        text :"Consulting",
        link :"https://spo.iitk.ac.in/assets/Roadmap_Consulting.pdf",
    },
    {
        text :"MSE Core",
        link :"https://spo.iitk.ac.in/assets/Roadmap_MSE.pdf",
    }, {
        text :"CHM Core",
        link :"https://spo.iitk.ac.in/assets/Roadmap_CHE.pdf",
    }, {
        text :"AE Core",
        link :"https://spo.iitk.ac.in/assets/Roadmap_AE.pdf",
    },
]
export const PreparationRoadmaps = () => {
  return (
    <section id="PreparationRoadmaps">
        <div className='max-w-screen-xl mx-auto px-10 mt-10'>
    <div>
        <p className='text-4xl font-extrabold'>Preparation Roadmaps</p>
        <div className='flex flex-wrap lg:gap-6 gap-3 justify-center items-center mt-8'>
            
            {roadmaps.map((btn)=> <button className=' w-64 p-5 bg-white rounded-md shadow text-md  font-bold' onClick={()=>window.location.href = btn.link}>{btn.text}</button>)}
        </div>
    </div>
   </div>
    </section>
  )
}
