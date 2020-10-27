import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="vav wrapper red darken-3">
            <div className="container">
                <a className='brand-logo' >Transport Management System</a>
                <ul className="right">
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signin'}>Sign in</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);