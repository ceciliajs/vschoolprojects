import img from "./img.jpg"
function Home() {


    return (
      <div>
        <h1 style={{fontStyle: "italic", padding: 10}}>Welcome to Stark Plumbing</h1>
        <h4>We have been in business 20 years and love plumbing! Explore our website for more information. </h4>
        <img style={{position: "absolute", left: 20, height: 200, width: 500}} src={img} alt="Girl as plumber"/>
      </div>
    );
  }
  
  export default Home;
  