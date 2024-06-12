import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../context'; // Import the consumer



function Navbar(props) {
    return (
        <AppConsumer>
            {context => {
                // You can access the context values and methods here if needed
                const { basket,authentication } = context;

                return (
                    <div>                       
                        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                            <a className="navbar-brand ml-3" href="#">{props.title}</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            {
                                authentication?(<div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/HomePage">Home<span className="sr-only">(current)</span></Link>
                                        </li>
                                    </ul>
                                </div>):(<div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/HomePage">Home<span className="sr-only">(current)</span></Link>
                                        </li>
                                    </ul>
                                </div>) //authentication kontrolü sonrası nulla çekilecek
                            }
            

                            {authentication? (
                                <div className='float-right'>
                            <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Basket">Basket <span class="badge badge-info">{basket.length}</span> </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/MyCourses">My Courses </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Log Out</Link>
                                    </li>
                                </ul>

                            </div>):<div className='float-right'>
                            <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Basket">Basket <span class="badge badge-info">{basket.length}</span> </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/MyCourses">My Courses </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Log Out</Link>
                                    </li>
                                </ul>

                            </div>}
                        
                        </nav>
                     

                    </div>
                );
            }}
        </AppConsumer>
    );
}

Navbar.defaultProps = {
    title: "LEARN.COM"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
