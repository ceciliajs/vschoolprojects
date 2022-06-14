import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"

function App() {


  const [hitList, setList] = useState([])

  //useEffect

  useEffect(() => {
    
    axios.get(`https://demo.visualinspection.maximo15.innovationcloud.info/api/datasets/05c6f1ad-6d41-4568-893a-6c4c873f170f/files`, {
          headers: {
            'x-auth-token': '2UK8-798d-uBtH-8mbK'
      }, 
        params: {
          query: 'user_metadata.type == "bad_dented"'
        } 
      })
      .then(response => {
      console.log(response)
      setList(response.data)
      console.log(response.data)
    })

}, [])




return (
  <div>
<h1>68</h1>
  </div>
)

}

export default App