import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="infoBlock">
            <h1>{'Nothing was found :<'}</h1>
            <p>We do not have such page on our website.</p>
            <Link to="/" className='button'>Go back</Link>
        </div>
    );
};

export default NotFound;
