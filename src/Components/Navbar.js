import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">{props.firstpage}</Link>
        <Link className="nav-link" to="/About">{props.secondpage}</Link>
        {/* <Link className="nav-link" to="/">{props.thirdpage}</Link>        */}
      </div>      
    </div>
 
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: "30px", width: "30px", cursor: 'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: "30px", width: "30px", cursor: 'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: "30px", width: "30px", cursor: 'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: "30px", width: "30px", cursor: 'pointer'}}></div>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
          <input className="form-check-input " onClick={()=>{props.toggleMode(null)}} type="checkbox" id='flexSwitchCheckDefault' />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
  </div>
</nav>
    )
}

export default Navbar;