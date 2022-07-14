import React, { useState, useEffect } from "react"
// import Home from "./components/Home.js"
// import Dashboard from "./components/Dashboard.js"
// import UploadForm from "./components/UploadForm.js"
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//import axios from "axios"


function App() {


//   const [hitList, setList] = useState([])

//   //useEffect

//   useEffect(() => {
    
//     axios.get(`https://demo.visualinspection.maximo15.innovationcloud.info/api/datasets/05c6f1ad-6d41-4568-893a-6c4c873f170f/files`, {
//           headers: {
//             'x-auth-token': ''
//       }, 
//         params: {
//           query: 'user_metadata.type == "bad_dented"'
//         } 
//       })
//       .then(response => {
//       console.log(response)
//       setList(response.data)
//       console.log(response.data)
//     })

// }, [])




return (
  <div>
<h1>Welcome to your Inspection Data Customized Platform!</h1>
{/* <div>

<Router>

<nav style={{
  background: "grey", 
  position: "fixed",
  bottom:400,
  padding: "10px 10px 0px 10px",
  width: "100%",
  }} >

<Link to="/" style={{padding: 5}}>
Home
</Link>

<Link to="dashboard" style={{padding: 5}}>
Dashboard
</Link>

<Link to="uploadform" style={{padding: 5}}>
Upload
</Link>

</nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="uploadform" element={<UploadForm />} />

  </Routes>
</Router>

</div> */}
  </div>
)

}

export default App