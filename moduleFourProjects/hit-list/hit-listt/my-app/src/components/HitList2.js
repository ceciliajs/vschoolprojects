import React, { useState, useEffect } from "react"
import axios from 'axios';

function Hitlist() {


    const [hitList, setHitList] = useState([])

    //useEffect

    useEffect(() => {

        axios.get(`https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json`)
            .then(response => {
                setHitList(response.data)
            })

    }, [])

    const targets = hitList.map((target, index) =>
        <div className="targets" key={index}>
            <img alt="targets" src={target.image}></img>
            <div className="names">{target.name}</div>
            

        </div>
    )


    return (
        <div>
            {targets}
        </div>
    )

}

export default Hitlist