import React from 'react';
import { useHistory } from "react-router";
import Details from '../Details/Details';

function App()
{
    let history = useHistory ();
    const handleClick = () => {
       history.push ('/details');
    }    

    return (
       <div className="App">
          <button onClick={handleClick}><Details></Details> </button>
       </div>
    );
}
    