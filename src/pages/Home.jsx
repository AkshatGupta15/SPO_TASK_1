import React from 'react'
import { Hero } from '../components/Hero'
import { Procedure } from '../components/Procedure'
import { Resources } from '../components/Resources'
import { PreparationRoadmaps } from '../components/PreparationRoadmaps'
import { FAQs } from '../components/FAQs'

export const Home = () => {
  return (
    <div>
        <div className="">
       <Hero/>
       {/* <Procedure/> */}
       {/* <Insights/> */}
       
       {/* <MoreInfo/> */}
       <Procedure/>
       <Resources/>
       <PreparationRoadmaps/>
       <FAQs/>
      </div>
    </div>
  )
}
