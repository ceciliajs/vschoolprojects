import React from "react"
import Home from "./components/Home.js"
import Dashboard from "./components/Dashboard.js"
import UploadForm from "./components/UploadForm.js"
import "./style.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {

  return (
    <div className="grid-container">
      <h4 className="title">Welcome to your Inspection Data Customized Platform! Made by you, for you.</h4>
    <Router>

<nav className="navbar" style={{
  // margin: 0,
  // padding: 0,
  // width: "25%",
  // backgroundColor: "#161616",
  // position: "fixed",
  // height: "100%",
  // overflow: "auto"
  
  }} >

<Link to="/" style={{ color: "white", padding: "5px"
  }}>
Home
</Link>

<Link to="dashboard" style={{ color: "white" , padding: "5px"
  }}>
Dashboard
</Link>

<Link to="uploadform" style={{ color: "white" , padding: "5px"
  }}>
Upload
</Link>

</nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="uploadform" element={<UploadForm />} />

  </Routes>
</Router>


</div>

  )

}

export default App