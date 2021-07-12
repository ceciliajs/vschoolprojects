import React from "react"

function BlogPost(props){
    return(
        <div class="blogs">
            <h6 style={{fontSize: "20px", padding: "0px", margin: "0px;"}}>{props.title}</h6>
            <h6 >SubTitle: {props.subTitle}</h6>
            <h6 >Author: {props.author}</h6>
            <h6 >Date: {props.date}</h6>
            <hr style={{width: "10px;", backgroundColor: "gray"}}/>
        </div>
    )
}

export default BlogPost