import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className='navbar'>
                <ul className="ul">
                    <li className="li" onClick={() => navigate('/home')}>Home</li>
                    <li className="li" onClick={() => navigate('/about')}>About</li>
                    <li className="li" onClick={() => navigate('/sampleReactTable')}>Table Data</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
