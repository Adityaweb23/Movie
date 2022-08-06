import React from "react";
import Footer from "./Footer";
// import { useGlobalContext } from "./context";
import Movies from "./Movies";
// import { AppContext } from "./context";
import Navbar from "./Navbar";
// import Search from "./Search";
const Home =(props) =>{
    // const name =useContext(AppContext);
    return (<>
       <div className="container">
       <Navbar/>
       </div>
       <div className="divbo container-fluid" >

        <Movies/>
        <Footer/>
       </div>
    </>
    );

};

export default Home;