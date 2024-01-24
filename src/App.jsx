import { useState } from 'react'
import './App.css'

import Header from './components/header/Header'
import Enjoy from './components/enjoy/Enjoy'
import Download from './components/Download/Download'
import What from './components/Watch/What'
import Kid from './components/Kids/Kid'
import FAQ from './components/Question/FAQ'
import Footer from './components/Footer/Footer'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <Header/>
      <Enjoy/>
      <Download/>
      <What/>
      <Kid/>
      <div style={{padding:"3rem",background:"#000",color:"#fff",textAlign:"center",borderBottom:"8px solid #222"}}>
          <h2 style={{fontSize:"3rem",marginBottom:"2rem"}}>Frequently Asked Questions</h2>
          {questions.map((question) =>{
            return <FAQ key={question.id}{...question}/>
          })}
          <p style={{marginTop:"2rem",fontSize:"1.2rem",margin:"2rem 0"}}>Ready to watch? Enter your email to create or restart your membership.</p>
          <input style={{width:"500px",padding:"1.5rem 1rem",background:"transparent",border:"1px solid #fff", borderRadius:"10px",marginRight:".5rem"}} type="email" placeholder='Email address' />
          <button style={{width:"200px",padding:"1.2rem 1rem",color:"#fff",background:"#e50914",border:"none",position:"relative",top:"4px",fontSize:"1.5rem",cursor:"pointer",borderRadius:"10px"}} type='submit'>Get Started</button>
      </div>
      <Footer/>
    </div>
  )
}

export default App
