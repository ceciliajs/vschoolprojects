import React from "react";
import UglyThingsEditForm from "./components/UglyThingsEditForm";
import UglyThingsListForm from "./components/UglyThingsListForm"

function App(props) {

  return (

    
      <div className="App">
        <header>Welcome to Ugly Things</header>
        <UglyThingsListForm />
        <UglyThingsEditForm />
      </div>
   

  );
}

export default App;
