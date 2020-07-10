import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="home">
                <Link to="/nasa-photo" className="home-link ">See into the stars!</Link>
            </div>
        </>
    )
}