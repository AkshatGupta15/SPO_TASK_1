import React from 'react'

export const Hero = () => {
  const scrollTo = (targetElement) => {
    const target = document.querySelector(targetElement);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
    <div className="hero py-40 bg-[#0B121E] text-white">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="lg:text-5xl text-2xl font-bold uppercase">preparation portal</h1>
      <p className='lg:text-sm text-[10px] font-bold mt-2'>Students' Placement Office (SPO) at IIT Kanpur</p>
      <p className="py-6 lg:text-xl text-md font-extralight">A collection of resources for students at IIT Kanpur.</p>
      <div className='lg:flex hidden gap-8 my-8 flex-wrap justify-center items-center mt-5'>
      <button className="btn btn-outline btn-info rounded-sm">INSIGHTS</button>
      <button className="btn btn-outline btn-info rounded-sm">PROCEDURES</button>
      <button className="btn btn-outline btn-info rounded-sm">RESOURCES</button>
      <button className="btn btn-outline btn-info rounded-sm"><a href='#PreparationRoadmaps' onClick={() => handleClick('#PreparationRoadmaps')}>PREPARATION ROADMAPS</a></button>
      <button className="btn btn-outline btn-info rounded-sm">FAQs</button>
      </div>
    </div>
    
  </div>
</div>
    </>
  )
}
