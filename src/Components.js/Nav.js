import '../App.css';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className='navbar'>
                <ul className="ul">nav local
                    <li className="li" onClick={() => navigate('/home')}>Home</li>
                    <li className="li" onClick={() => navigate('/about')}>About</li>
                    <li className="li" onClick={() => navigate('/sampleReactTable')}>Get Data</li>
                    <li className="li" onClick={() => navigate('/sampleFields')}>Get Data</li>
                </ul>lllllllllllllll
            </nav>

        </>
    );
};

export default Nav;
