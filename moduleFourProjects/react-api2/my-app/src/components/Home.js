import React, { useEffect, useState } from "react"
import axios from "axios"


function Home() {
  //   //useEffect
  const [lasttImageinDatasetURL, setLastImageTakenURL] = useState()

  useEffect(() => {
    grabArrayImageDataSet()
    console.log("1st useEffect called") 
}, []);


  function grabArrayImageDataSet() {
   axios.get(`https://wwdemo.visualinspection.wwdemomas8.gtm-pat.com/api/datasets//files`, {
      headers: {
        'x-auth-token': '',
      }
    })
    .then(response => {
      console.log(response.data)
      const resData = response.data  
      const imageId = resData.map((currentImageId) => currentImageId._id)
    
      const lastPicture = imageId[0]
      console.log(lastPicture)
      axios.get(`https://wwdemo.visualinspection.wwdemomas8.gtm-pat.com/api/datasets//files/${lastPicture}/download`, {
      headers: { 
        'x-auth-token': '', 
      },
      responseType: 'blob'
    }) //https://thewebdev.info/2021/09/26/how-to-display-binary-data-as-image-in-react/ https://solveforum.com/forums/threads/solved-how-to-receive-blob-response-type-from-axios-request-with-node-and-gcp-function.408393/
    .then(function (response) {
      const imageBlob = response.data;
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        setLastImageTakenURL(base64data)
      }
      console.log("grabimagedata called")  ;
    })
    }) 

  };

  return (
    <div>
      <h5 style={{ fontStyle: "italic" }}>Last Image Taken</h5>
      <img src={lasttImageinDatasetURL} alt="can"></img>
      <button onClick={grabArrayImageDataSet}  style={{ backgroundColor: "#0f62fe", color: "white" }}>Load</button>
    </div>
  );
}

export default Home;