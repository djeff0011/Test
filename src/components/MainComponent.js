import React from "react"
import '../style.css';

function MainComponent() {

   //variables to play with
   const firstName = "Guest"
   const lastName = "Speaker"

   // inside of the return, in order to get the javascript working, must encapsulate
   //the javascript into curly braces. like firstName and lastName
   return(
      <main className="mainbody"><h2>Hello {firstName + " " + lastName}</h2></main>
   )
}

export default MainComponent