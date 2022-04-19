import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import product5 from '../../assests/product5.png'
import InvertorTypes from './InvertorsTypes'
import { Helmet } from 'react-helmet';
class MicroInvertor extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>Micro Invertor | Solar Systems | SLM Solar</title>
                    <meta
                        name='description'
                        content='Micro Inverters help make solar power system more productive, dependable and smarter than traditional inverter systems. Shop micro inverters today at SLM Solar.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>Benefits of Micro Invertor 2021</h1>
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
                            <strong>
                                Enphase IQ 7, IQ 7+, and IQ 7XMicroinverters
                            </strong>
                            <p>
                                The high-powered smart grid-ready Enphase IQ
                                Series Micros™ achieve the highest system
                                efficiency.Part of the Enphase IQ System, the IQ
                                7, IQ 7+, and IQ 7X Micro integrate perfectly
                                with the Enphase Envoy-S™, and the Enphase
                                Enlighten™ monitoring and analysis software.The
                                IQ Series Micros extend the reliability
                                standards set forth by previous generations and
                                undergo over a million hours of power-on
                                testing, enabling Enphase to provide an
                                industry-leading warranty
                            </p>
                            <h2>Easy to Install</h2>
                            <p>• Lightweight and simple</p>
                            <p>
                                • Faster installation with improved, lighter
                                two-wire cabling
                            </p>
                            <h3>Productive and Reliable</h3>
                            <p>
                                • Optimized for high powered 60-cell, 72-cell*
                                and 96-cell* modules
                            </p>
                            <p>• More than a million hours of testing</p>
                            <p>• Class II double-insulated enclosure</p>
                            <h3>Smart Grid Ready</h3>
                            <p>
                                • Complies with advanced grid support, voltage
                                and frequency ride-through requirements
                            </p>
                            <p>
                                • Remotely updates to respond to changing grid
                                requirements
                            </p>
                            <p>• Configurable for varying grid profiles</p>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={product5}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
                <InvertorTypes />{' '}
            </div>
        )
    }
}

export default MicroInvertor
