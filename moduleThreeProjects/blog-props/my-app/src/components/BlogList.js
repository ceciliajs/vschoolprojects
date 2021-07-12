import React from "react"
import blogData from "./blogData"

import BlogPost from "./BlogPost"

function BlogList(){
    const postMessage = blogData.map(function(data){
        console.log(data)
        return(
            
            <BlogPost title={data.title} subTitle={data.subTitle} author={data.author} date={data.date} />
            
        )

    })
    return (
        <div>
            {postMessage}
        </div>
    )

}

export default BlogList