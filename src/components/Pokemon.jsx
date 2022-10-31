import React,{useState} from 'react'
import axios from 'axios'

const Pokemon = () =>{
  const [pokeList, setPokeList]= useState([])
  const [errorResponse, setErrorResponse] = useState("")


  const makeAPICall= ()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => {
      const {results} = res.data
      setPokeList(results)
    })
    .catch(error => setErrorResponse("Somthing Went Wrong"))
  }

  return (
    <fieldset>
      <button onClick={makeAPICall}>Get Pokemon</button>
      {errorResponse ? <p>{errorResponse}</p> : null}
      {pokeList.map((poke)=> <p>{poke.name}</p>)}
    </fieldset>
  )

}

export default Pokemon