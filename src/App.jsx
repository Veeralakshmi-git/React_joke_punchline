import React from 'react'
import jokesData from './jokesData'
import Joke from './Joke'


function App() {
const [jokes, setJokes] = React.useState(jokesData)
 const jokeElements = jokes.map(dadjokes => {
   return (
        <Joke
            key={dadjokes.id} 
            setup={dadjokes.setup}
            punchline={dadjokes.punchline}
        /> 
        )
 })

  return (
        <div>{jokeElements}
          </div>
  )
}

export default App;
