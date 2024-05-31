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
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./components/Layout"
import { MockTest } from "./pages/MockTest"
import { MockQuestion } from "./pages/MockQuestion"

function App() {


  return (
    <>
    

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/insights" element={<Insights/>}/>
      <Route path="/mocktest" element={<MockTest/>}/>
      <Route path="/mocktest/:id" element={<MockQuestion/>}/>
    
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
