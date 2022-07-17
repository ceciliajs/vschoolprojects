import React, { useEffect, useState } from "react"
import axios from "axios"
import FileUploader from "./FileUploader"

function UploadForm() {

const [name, setName] = useState("")
const [selectedFile, setSelectedFile] = useState(null)

const submitForm = () => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("file", selectedFile)
  axios.post("https://wwdemo.visualinspection.wwdemomas8.gtm-pat.com/api/dlapis/", {
    headers: {
      'x-auth-token': ''
    },
    data: formData
  })
  .then((response) => {
    console.log(response)
    alert("File Upload success");
  })
  .catch(function (error) {
    console.log(error);
  })


};

    return (
      <div>
        <h5 style={{fontStyle: "italic"}}>Upload Your Image Here</h5>
        <form>
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
            />
          <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
          />
{/* 
          <input 
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
            /> */}
        <button onClick={submitForm} style={{backgroundColor: "#0f62fe", color: "white"}}>Upload</button>
        </form>
      </div>
    );
  }
  
  export default UploadForm;