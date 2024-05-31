import React, { useState } from 'react'
import AllPosts from "../assets/index"
const Insights = () => {
    
    const [inputQuery, setInputQuery] = useState("")
    const handleInputChange = (e) => {
        e.preventDefault();
        setInputQuery(e.target.value);
      };
      const filteredItems = AllPosts.filter((post) => {
        return post.slug.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1;
      });
      // console.log(filteredItems)
    //   const filterByYear = (year) => {
    //     const relatedItems = AllPosts.filter(
    //       (item) => item.slug.split('-')[0] === year
    //     );
    //     return relatedItems;
    // }
    const filterByCategory = (category) => {
        const relatedItems = filteredItems.filter(
          (item) => item.slug.split('-')[1] === category
        );
        return relatedItems;
    }

    const placement23 = filterByCategory("placement")
    const intership23 = filterByCategory("intern")
      // console.log(intership23)
  return (
   <>
   <div className='max-w-screen-xl mx-auto px-10'>
    <div className='pt-32 pb-20'>
    <p className='text-4xl font-extrabold mb-8'>Insights</p>
        <input className='input input-bordered w-full text-slate-400 font-extralight' type='text' value={inputQuery} onChange={handleInputChange} placeholder='Search..' /> 
       <div>
       
        <p className='text-4xl font-extrabold text-center my-8' >2023 Placement Insight</p>
        <ul>
          {placement23.map((item,index)=>{
            return(
              <li key={index}>
                <div className='lg:w-3/4 mx-auto'>
                  <a href='#' className='lg:text-base text-sm font-bold flex gap-20 mb-2'>
                    <span className='font-extralight'>{item.meta.date}</span>
                    <span>{item.meta.description}</span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
       </div>
       <div>
        <p className='text-4xl font-extrabold text-center my-8' >2023 Internship Insight</p>
        <ul>
          {intership23.map((item,index)=>{
            return(
              <li key={index}>
                <div className='w-3/4 mx-auto'>
                  <a href='#' className=' lg:text-base text-sm font-bold flex gap-20 mb-2'>
                    <span className='font-extralight'>{item.meta.date}</span>
                    <span>{item.meta.title}</span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
       </div>
    </div>
   </div>


   </>
  )
}
export default Insights;
