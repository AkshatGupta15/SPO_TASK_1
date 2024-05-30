import React from 'react'
const resources = [
    {
    text : "Deffered Placement Policy",
    link : "https://spo.iitk.ac.in/docs/2021-22/deferred_placement_policy.pdf"
    },
    {
        text :"Placement Policy",
        link :"https://spo.iitk.ac.in/assets/2023-24/Placement_Policy_2023-24.pdf"
    },
    {
        text :"Internship Policy",
        link :"https://spo.iitk.ac.in/assets/2023-24/Internship-Policy-2023-24.pdf",
    },
    {
        text :"Leave Application",
        link :""
    },
    {
        text :"Project Verification Form",
        link :""
    },
    {
        text :"PPT Absence Form",
        link :"https://docs.google.com/forms/d/e/1FAIpQLSdV3sWKB-GSbFNkHdGSSP7N4ydybbFYumTjBSIAaZw04Na-xQ/viewform"
    },
    {
        text :"Corporate Internship Waiver Form",
        link :"https://docs.google.com/document/d/1zQg3xr6Ca0jHFWPn6o2ZCyi7ypxtjdFoYdIT4pZwncc/edit"
    },
    {
        text :"List of companies",
        link :"https://spo.iitk.ac.in/docs/2021-22/List-of-companies.pdf"
    },
    {
        text :"Previous Year Internship Proforma",
        link :"https://drive.google.com/file/d/1Td9Z5gMgMO6U9mn8tXTS86IZ2Rs0LpWB/view"
    },
    {
        text :"Previous Year Placement Proforma",
        link :"https://drive.google.com/file/d/1VSVDkvSQO0Gi270WlxXeFr_ctxqtUERF/view"
    },
]
export const Resources = () => {
  return (
   <>
   <div className='max-w-screen-xl mx-auto my-8 px-10 mt-10'>
    <div>
        <p className='text-4xl font-extrabold'>Resources</p>
        <div className='flex flex-wrap lg:gap-6 gap-3 justify-center items-center mt-8'>
            
            {resources.map((btn)=> <button className=' w-64 p-5 bg-white rounded-md shadow-md text-md  font-bold' ><a href={btn.link} >{btn.text}</a></button>)}
        </div>
    </div>
   </div>
   </>
  )
}
