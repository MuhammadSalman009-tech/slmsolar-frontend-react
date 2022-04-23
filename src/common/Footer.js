import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.png'
import sf_logo from '../assests/sf_logo.png'

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className='b-dblue w-100 b-0 pt-3'>
                <div className='contaier p-3 pl-2'>
                    <div className='row m-0'>
                        <div className='col-sm-12 col-md-4 col-lg-3'>
                            <h5 className='grey font-weight-bold'>Services</h5>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/services/domestic-power-system'>
                                        Domestic Power Systems
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/services/commercial-power-system'>
                                        Commercial Power System
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/services/hybrid-solar-system'>
                                        Hybrid Solar Systems
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/services/solar-batteries-and-storage'>
                                        Solar Batteries and Storage
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-2'>
                            <h5 className='grey font-weight-bold'>Products</h5>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/products/solar-pannel'>
                                        Solar Pannel
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='td-none'
                                        href='/products/solar-battery'>
                                        Solar Battery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/products/solar-string-invertor'>
                                        Solar String Invertor
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/products/micro-invertor'>
                                        Micro Invertor
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='td-none'
                                        href='/products/hybrid-invertor'>
                                        Hybrid Invertor
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-2'>
                            <h5 className='grey font-weight-bold'>Links</h5>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li>
                                    <Link className='td-none' to='/home'>
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className='td-none' to='/contact'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link className='td-none' to='/offers'>
                                        Offers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='td-none'
                                        to='/terms-and-conditions'>
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li className='nav-item '>
                                    <Link className='td-none ' to='/gallery'>
                                        Our Projects
                                    </Link>
                                </li>
                                <li className='nav-item '>
                                    <Link className='td-none ' to='/refer-us'>
                                        Refer Us
                                    </Link>
                                </li>
                                <li className='nav-item '>
                                    <Link className='td-none ' to='/offers'>
                                        Offers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-lg-3'>
                            <h5 className='grey font-weight-bold'>
                                Contact Us
                            </h5>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li>
                                    <i
                                        className='fa fa-clock-o grey'
                                        aria-hidden='true'></i>
                                    <span className='grey ml-4'>
                                        9:00AM - 5:00PM
                                    </span>
                                </li>
                                <li>
                                    <i
                                        className='fa fa-phone grey'
                                        aria-hidden='true'></i>
                                    <span className='grey ml-4'>
                                        <a
                                            className='td-none grey'
                                            href='tel:+61300513807'>
                                            1300 513 807
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <i
                                        className='fa fa-envelope grey'
                                        aria-hidden='true'></i>
                                    <span className='grey ml-4'>
                                        <a
                                            className='td-none'
                                            href='mailto:info@slmsolar.com.au'>
                                            info@slmsolar.com.au
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <i
                                        className='fa fa-building grey'
                                        aria-hidden='true'></i>
                                    <span className='grey ml-4'>
                                        <a
                                            className='td-none grey'
                                            href='https://www.google.com/maps/place/4%2F274+Hoxton+Park+Rd,+Prestons+NSW+2170,+Australia/@-33.92917,150.8879479,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12945fdccb0c7f:0x6d095d9b085561a5!8m2!3d-33.92917!4d150.8901366'>
                                            4/274 Hoxton Park Road, Prestons NSW
                                            2170
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-lg-2'>
                            <img src={sf_logo} alt='slm solar' width={140} />
                            <br />
                            {/* <img classname='logo_img' src={s_logo} alt='solaris finance' /> */}
                        </div>
                    </div>
                    <hr
                        className='p-0 grey'
                        style={{ border: '1px solid' }}></hr>
                    <div className='row m-0 pb-3'>
                        <div className=' col-md-6 col-lg-6 grey'>
                            <p>
                                Copyrights 2020. By{' '}
                                <a
                                    href='https://slmsolar.com.au/'
                                    className='grey'>
                                    slmsolar.com.au
                                </a>
                            </p>
                        </div>
                        <div className=' col-md-6 col-lg-6 d-flex'>
                            <a href='https://www.linkedin.com/company/slmsolar'>
                                <i className='fa fa-linkedin fa-lg grey mx-2'></i>
                            </a>
                            <a href='https://www.facebook.com/SLMSOLARSYDNEY/'>
                                <i className='fa fa-facebook fa-lg grey mx-2'></i>
                            </a>
                            <a href='https://www.instagram.com/slm_solar/'>
                                <i className='fa fa-instagram fa-lg grey mx-2'></i>
                            </a>
                            {/* <a href='/'>
                                <i className='fa fa-twitter fa-lg grey'></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
