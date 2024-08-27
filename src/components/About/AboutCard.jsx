import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
const AboutCard= () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{textAlign:'justify'}}>
      Hi Everyone, I am <span className='purple'>Ankit karapurkar</span>
      from <span className='purple'> Goa , India</span>
      <br />
      I am currently employed as frontend developer intern at future core innovation
      <br />
      I have completed my Bachlors in electronic and telecommunication
      <br/>
      <br/>
      Apart from codding , some other activities that i love to do!
     </p>
     <ul>
      <li className="about-activity">
       <ImPointRight/> Playing Games
      </li>
      <li className="about-activity">
       <ImPointRight/> Travelling
      </li>
     </ul>
     <p style={{color:"rgb(155 126 172)"}}>
      "Strive to build things that make difference!"{""}
     </p>
     <footer className="blockquote-footer">
      Ankit karapurkar
     </footer>
        </blockquote>
      </Card.Body>
   </Card>
  )
}

export default AboutCard