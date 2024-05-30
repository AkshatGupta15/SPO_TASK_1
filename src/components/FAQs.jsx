import React from 'react'
import Collapsible from './Collapsible'


export const FAQs = () => {
    const faqs = [
        {
        q :"What are the restrictions on resume format?",
        a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
        },
        {
            q :"What should be the name of the resume file (one page)?",
            a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
            },
        {
                q :"I don't have any proof for some points on my resume, but I can provide them after campus reopens.",
                a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
        },
        {
            q :"When is a Project Verification Form (PVF) required?",
            a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
    },        {
        q :"How will my PoR/projects under the institute clubs be verified?",
        a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
},        {
    q :"I have some Self projects, how will they be verified?",
    a :"There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order."
},
        
        
            
    ]
  return (
   <>
   <div className='max-w-screen-xl mx-auto px-10'>
    <p className=' font-extrabold lg:text-4xl text-2xl mb-8 mt-10' >Resume FAQs</p>
    <div className='  flex flex-col gap-3'>
        {faqs.map((faq)=> <Collapsible question={faq.q} answer={faq.a} />)}
    </div>
    <p className=' font-extralight my-12'><span className='font-bold'>NOTE:</span> Whenever you send a mail containing proofs/PVFs or anything related to resume submission, kindly ensure that the subject contains your roll number. For detailed guidelines and recommendations on resume making, all the students are advised to visit this <span className='text-primary'>link.</span></p>
   </div>
   </>
  )
}
