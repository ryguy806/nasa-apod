import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

export default function Home() {
    return (
        <>
            <NavBar />
            <div>
                <Link to="/nasa-photo">See into the stars!</Link>
            </div>
        </>
    )
}