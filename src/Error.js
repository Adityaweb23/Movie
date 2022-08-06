import react, { useContext } from 'react';
import Navbar from './Navbar';

const Error=()=>{
    return(<>
    <Navbar/>
    <div className='container justify-content-center text-center'>

        <h1 className="divbo">Something went wrong..</h1>
        <p>plzz go back..</p>
    </div>
    </>)
}

export default Error;