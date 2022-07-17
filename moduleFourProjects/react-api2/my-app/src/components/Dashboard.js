import React, { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

  const [lastNumOfDefects, setDefectNum] = useState()

  useEffect(() => {
    grabNumOfDefects()
    console.log("1st useEffect called")
  }, []);

  function grabNumOfDefects() {

    axios.get(`https://wwdemo.visualinspection.wwdemomas8.gtm-pat.com/api/datasets//files`, {
      headers: {
        'x-auth-token': '',
      }
    })
      .then(response => {
        console.log("this is api response ", response);
        const resData = response.data
        var count = 0
        for (var i = 0; i < resData.length; i++) {
          console.log(resData[i].tag_list[0].tag_name)
          const failLabelsTotal = resData[i].tag_list[0].tag_name
          console.log("this is failLabelsTotal[0] ", failLabelsTotal[0])
          if (failLabelsTotal === 'bad_dented') {
            count++
          }

        }
        console.log(count)
        setDefectNum(count)
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  return (
    <div >
      <h5 style={{ fontStyle: "italic" }}>Current # of Defective Parts</h5>
      <div>{lastNumOfDefects}</div>
      <button onClick={grabNumOfDefects} style={{ backgroundColor: "#0f62fe", color: "white" }}>Refresh</button>
    </div>
  );
}

export default Dashboard;