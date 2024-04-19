//import react into the bundle
import React from "react";

// include your styles into the webpack bundle


function Jumbotron() {
    return (
      <div className="jumbotron mt-1 pt-2 p-4 text-black rounded"
      style={{
        width:'80%',
        margin:'auto'
      }}
      >
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>

</div>

  );
}
  
  export default Jumbotron;