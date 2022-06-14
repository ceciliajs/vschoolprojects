import React, {useState} from "react";
import Post from "./components/Post";

function App(props) {

const [blogPosts, setBlogPost] = useState([
  {
    title: "title 1",
    description: "description 1"
  },
  {
    title: "title 2",
    description: "description 2"
  },
  {
    title: "title 3",
    description: "description 3"
  }
])

const list = blogPosts.map((post, index)=> <Post key={index} title={post.title} description={post.description} />)

  return (
    <div className="App">

    </div>
  );
}

export default App;
