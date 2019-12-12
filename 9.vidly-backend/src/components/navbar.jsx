import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = ({user}) => {
    // If user is logged in then we will receive user id & password

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-lg-5">
            <Link className="navbar-brand" to='/'>Vidly</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" to='/movies'>Movies</NavLink>
                    <NavLink className="nav-item nav-link" to='/customer'>Customer</NavLink>
                    <NavLink className="nav-item nav-link" to='/rental'>Rental</NavLink>
                    {/*condtional rendering - if user obj is avail login, register will not show*/}
                    {!user &&
                    <React.Fragment>
                        <NavLink className="nav-item nav-link" to='/login'>Login</NavLink>
                        <NavLink className="nav-item nav-link" to='/register'>Register</NavLink>
                    </React.Fragment>
                    }
                    {user &&
                    <React.Fragment>
                        <NavLink className="nav-item nav-link" to='/profile'>{user.name}</NavLink>
                        <NavLink className="nav-item nav-link" to='/logout'>Logout</NavLink>
                    </React.Fragment>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;