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
      const filterByYear = (year) => {
        const relatedItems = AllPosts.filter(
          (item) => item.slug.split('-')[0] === year
        );
        return relatedItems;
    }
    const filterByCategory = (category) => {
        const relatedItems = AllPosts.filter(
          (item) => item.slug.split('-')[1] === category
        );
        return relatedItems;
    }
    const y23 = filterByYear("2023")
    const placement23 = filterByCategory("placement")
      console.log(placement23)
  return (
   <>
   <div>
    <div className='max-w-screen-xl mx-auto '>
        <p className='text-4xl font-extrabold'>Insights</p>
        <input className='input input-bordered w-full text-slate-400 font-extralight' type='text' value={inputQuery} onChange={handleInputChange} placeholder='Search..' /> 
    </div>
   </div>


   </>
  )
}
export default Insights;
