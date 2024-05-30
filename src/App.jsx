import "./output.css"
import './App.css'
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { FAQs } from "./components/FAQs"
import Insights from "./components/Insights"
import { MoreInfo } from "./pages/MoreInfo"
import { Resources } from "./components/Resources"
import { PreparationRoadmaps } from "./components/PreparationRoadmaps"
import { Footer } from "./components/Footer"
import { Procedure } from "./components/Procedure"

function App() {


  return (
    <>
    

    <div className="bg-[#f9f9ff]">
      <div >
      <Navbar/>
      </div>
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
      <Footer/>
    </div>
    </>
  )
}

export default App
