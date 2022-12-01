import React from 'react'

export default function Joke(props){
const [show,isShow] = React.useState(true)
function showpunch(){
    isShow(prevstate => !prevstate)
}
  return(
       <div class="container">
         {props.setup && <h3>{props.setup}</h3>}
        {show && <p>{props.punchline}</p>} 
         <button onClick={showpunch}>{show ? "Hide" : "Show"} Punchline</button>
         <hr />
        </div>
  )      
}