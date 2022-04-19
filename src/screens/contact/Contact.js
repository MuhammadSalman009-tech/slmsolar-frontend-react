import React, { Component } from 'react'
import ContactForm from './ContactForm'
import { Helmet } from 'react-helmet';
class Contact extends Component {
    state = {}
    render() {
        return (
            <div className='my-5 py-3'>
                <Helmet>
                    <title>
                        Contact | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='Contact slm solar systems via email, or directly by filling the below form.'></meta>
                </Helmet>
                <div className='container-fluid'>
                    <div className='row m-0'>
                        <div className='col-lg-4'>
                            <div className='b-dblue p-3 rounded-lg d-flex flex-column align-items-center'>
                                <h4 className='grey text-center my-4'>
                                    Contact Us
                                </h4>
                                <ul
                                    className='d-flex flex-column justify-content-center'
                                    style={{
                                        listStyle: 'none',
                                        paddingLeft: 0,
                                    }}>
                                    <li className='my-2'>
                                        <i
                                            className='fa fa-clock-o grey'
                                            aria-hidden='true'></i>
                                        <span className='grey ml-4'>
                                            9:00AM - 5:00PM
                                        </span>
                                    </li>
                                    <li className='my-2'>
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
                                    <li className='my-2'>
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
                                    <li className='my-2'>
                                        <i
                                            className='fa fa-building grey'
                                            aria-hidden='true'></i>
                                        <span className='grey ml-4'>
                                            <a
                                                className='td-none grey'
                                                href='https://www.google.com/maps/place/4%2F274+Hoxton+Park+Rd,+Prestons+NSW+2170,+Australia/@-33.92917,150.8879479,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12945fdccb0c7f:0x6d095d9b085561a5!8m2!3d-33.92917!4d150.8901366'>
                                                4/274 Hoxton Park Road, Prestons
                                                NSW 2170
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                                <div className='d-flex justify-content-around  my-2'>
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
                                        <i className='fa fa-twitter fa-lg grey mx-2'></i>
                                    </a> */}
                                </div>
                                <a
                                    className='nav-link td-none'
                                    href='tel:+61497652226'>
                                    <button className='btn b-lblue btn-info grey px-3'>
                                        <i className='fa fa-phone'></i>
                                        <span className='h5'>+61497652226</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='b-grey py-3 rounded-lg'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
