import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className='text-center'>
            <h1>404 Not Found</h1>
            <p>We couldn’t find the page you were looking for. Visit :-
                <Link style={{color:"blue"}} to="/">
                 home page
                </Link>
            </p>
        </div>
     );
}

export default NotFound;