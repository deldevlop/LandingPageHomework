//import react into the bundle
import React from "react";

// include your styles into the webpack bundle
import Jumbotron from "./jumbotron";


function Content() {
    return (
        
        <div className="jumbotron" style={{
            width:'80%',
            backgroundColor: 'powderblue',
            display:'flex',
            margin:'auto',
            //marginBottom:'10px'
          }}>
                  <div><Jumbotron /></div>
      
                </div>
                  
    );
  }
  
  export default Content;