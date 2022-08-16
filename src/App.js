import React from 'react'
import './App.css'
import Header from './Header'
import Alert from './Alert'
import Section from './Section'
import Footer from './Footer'




function App() {
    return (
        <div>
       <Header/>
       <Alert/>
       <Section title="phone xy" className="first-hightlight-wrapper"/>
       <Section title="phone xy Pro" className="second-hightlight-wrapper"/>
       <Section title="earbuds pro" className="third-hightlight-wrapper"/>
     <Footer/>
       </div>
    )
}

export default App
