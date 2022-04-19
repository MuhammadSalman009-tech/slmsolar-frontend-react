import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../assests/logo.png'

const Navbar = () => {
    const history = useHistory()

    return (
        <nav className='navbar navbar-expand-lg navbar-dark b-dblue grey'>
            {/* <Link className='navbar-brand' to='/home'>
                <img className='px-2' src={logo} alt='SLM Solar'></img>
            </Link> */}
            <img
                onClick={() => history.push('/home')}
                className='px-2 cursor-pointer'
                src={logo}
                alt='SLM Solar'></img>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
            </button>
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto  d-flex align-items-center'>
                    <li className='nav-item '>
                        <Link className='td-none mx-3 ' to='/home'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link
                            className='td-none mx-3 dropdown-toggle'
                            to='#'
                            id='services'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Services
                        </Link>
                        <div
                            className='dropdown-menu'
                            aria-labelledby='services'>
                            <a
                                className='dropdown-item'
                                href='/services/domestic-power-system'>
                                Domestic Power Systems
                            </a>
                            <a
                                className='dropdown-item'
                                href='/services/commercial-power-system'>
                                Commercial Power System
                            </a>
                            <a
                                className='dropdown-item'
                                href='/services/hybrid-solar-system'>
                                Hybrid Solar Systems
                            </a>
                            <a
                                className='dropdown-item'
                                href='/services/solar-batteries-and-storage'>
                                Solar Batteries and Storage
                            </a>
                        </div>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link
                            className='td-none mx-3 dropdown-toggle'
                            to='#'
                            id='products'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Products
                        </Link>
                        <div
                            className='dropdown-menu'
                            aria-labelledby='products'>
                            <a
                                className='dropdown-item'
                                href='/products/solar-pannel'>
                                Solar Pannel
                            </a>

                            <a
                                className='dropdown-item'
                                href='/products/solar-battery'>
                                Solar Battery
                            </a>

                            <Link
                                className='dropdown-item dblue dropdown-toggle'
                                to='#'
                                id='invertor'
                                role='button'
                                data-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'>
                                Invertor
                            </Link>
                            <div
                                className='dropdown-menu-left dropdown-menu'
                                aria-labelledby='invertor'>
                                <a
                                    className='dropdown-item'
                                    href='/products/solar-string-invertor'>
                                    Solar String Invertor
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/products/micro-invertor'>
                                    Micro Invertor
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/products/hybrid-invertor'>
                                    Hybrid Invertor
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className='nav-item '>
                        <Link className='td-none mx-3' to='/gallery'>
                            Gallery
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className='td-none mx-3' to='/refer-us'>
                            Refer Us
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className='td-none mx-3' to='/offers'>
                            Offers
                        </Link>
                    </li>

                    <li className='nav-item '>
                        <Link className='td-none mx-3 ' to='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link td-none' href='tel:+61300513807'>
                            <button className='btn b-lblue btn-info grey'>
                                <i className='fa fa-phone'></i>
                                <span className='h5'> 1300 513 807</span>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
