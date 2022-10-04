import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
const Navbar=()=>{
  const {query,setQuery,isError}=useGlobalContext();
    
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
  <NavLink className="navbar-brand my-auto" aria-current="page" to="/">AKMovies</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex mx-auto" onSubmit={(e)=>e.preventDefault()}>
        <input className="form-control me-2" type="search" placeholder="search your movie" aria-label="Search" value={query} onChange={e=>setQuery(e.target.value)} />
        <button className="bttn" type="submit">Search</button>
      </form>
      <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
        <li className="nav-item mx-1">
          <NavLink className="nav-link  p-1 max-1" aria-current="page" to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
  <p className="contra justify-content-center text-center">{isError.show && isError.msg}</p>
</div>
</>
    );
}
export default Navbar;