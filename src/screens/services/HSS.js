import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hybrid from '../../assests/hybrid.png'
import serviceimage3 from '../../assests/serviceimage3.jpg'
import { Helmet } from 'react-helmet'

class HSS extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>
                        Hybird Solar System | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='SLM Solar can help you add a solar energy system whether on-gird or off-grid. For off-grid locations, we offer Portable DC solar home kit.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>High Quality Hybird Solar System</h1>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <Link to='/contact'>
                                <button className='btn btn-lg btn-info b-lblue grey'>
                                    Request a Quote Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='row m-0'>
                        <div className='col-lg-8'>
                            <p>
                                SLM Solar only trusts in the use of
                                high-quality, customer-oriented Hybrid Solar
                                System Solutions. We want to ensure that our
                                solar solutions allow you to monitor your energy
                                usage and change your energy behaviour
                                positively.{' '}
                            </p>
                            <p>
                                {' '}
                                Similar to a Grid Solar System, hybrid solar
                                panel systems are used to store energy for
                                potential use with batteries. This energy
                                storage capacity allows most hybrid systems,
                                similar to UPS (uninterrupted power delivery),
                                to act as a power supply during nights and back
                                up in blackout.{' '}
                            </p>
                            <p>
                                SLM Solar gives the best Hybrid Solar System
                                price in all over Australia.
                            </p>

                            <img
                                className='img-thumbnail my-2'
                                src={serviceimage3}
                                alt='Domestic Solar System'></img>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={hybrid}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HSS
