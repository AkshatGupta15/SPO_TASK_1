import React from 'react'

export const Procedure = () => {
    const procedures = [
        "You must prepare a master resume and submit it by the specified deadline.",
        "Before the deadline, the Students' Placement Office must receive the proofs justifying each point in your resume as well as PVFs (Project Verification Forms) from the project or internship mentor.",
        "You must register on the Recruitment Automation System (RAS) within the specified timeframe as notified by SPO.",
        "After you've registered, you are supposed to upload all one/two page resumes on the portal.",
        "The Students' Placement Office appoints a point of contact (PoC) for your resume verification.",
        "You would be assigned a time window during which the allotted POC would verify your resume.",
        "Once your resume has been verified, you may begin applying to companies on the RAS in which you are eligible.",
        "Following your application, you must attend all of the company's hiring events (PPTs / Tests / GDs).",
        "If you get an offer from a company, the SPO would notify you and your account would be frozen."

    ]
  return (
    <div>
        <div className='max-w-screen-xl mx-auto px-10 mt-32 mb-20'>
        <p className='text-4xl font-extrabold mb-8'>Procedure</p>
            <div className='flex flex-wrap gap-5'>
                {procedures.map((procedure,index)=>{
                    return(
                    <div className='lg:w-[32%] bg-white p-8 text-center font-extralight' key={index}>
                        <p className=' font-bold'>{index+1}</p>
                        <p>{procedure}</p>
                     </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}
