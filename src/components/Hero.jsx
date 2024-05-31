import React from 'react'

export const Hero = () => {
  const handleClick = (targetElement) => {
    const target = document.querySelector(targetElement);
    // console.log(target)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
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
      <button className="btn btn-outline btn-info rounded-sm"><a href='/mocktest'>Mock Test</a></button>
      <button className="btn btn-outline btn-info rounded-sm"><a href='/insights'>INSIGHTS</a></button>
      <button className="btn btn-outline btn-info rounded-sm"><a onClick={() => handleClick('#PROCEDURES')}>PROCEDURES</a></button>
      <button className="btn btn-outline btn-info rounded-sm"><a onClick={() => handleClick('#RESOURCES')}>RESOURCES</a></button>
      <button className="btn btn-outline btn-info rounded-sm"><a onClick={() => handleClick('#PreparationRoadmaps')}>PREPARATION ROADMAPS</a></button>
      <button className="btn btn-outline btn-info rounded-sm"><a onClick={() => handleClick('#FAQs')}>FAQs</a></button>
      
      </div>
    </div>
    
  </div>
</div>
    </>
  )
}
