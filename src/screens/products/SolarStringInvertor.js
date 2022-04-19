import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import product3 from '../../assests/product3.png'
import InvertorTypes from './InvertorsTypes'
import { Helmet } from 'react-helmet';

class SolarStringInvertor extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>Solar String Invertor | Solar Systems | SLM Solar</title>
                    <meta
                        name='description'
                        content='Solar String Inverter wiring can be complex! We provide a primer on key considerations when deciding how to string solar panels.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>Best Solar String Invertors 2021</h1>
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
                            <strong>SUNNY BOY STORAGE 3.7 / 5.0 / 6.0</strong>
                            <p>
                                With the SUNNY BOY STORAGE multistring battery
                                Solar inverter, for the first time, up to three
                                different high-voltage batteries can be
                                connected to one battery inverter. To connect
                                larger batteries, three DC inputs can also be
                                connected in parallel. The Sunny Boy Storage has
                                integrated emergency power, which can be
                                switched manually. Furthermore, it can even take
                                over the entire electricity supply of the three
                                line conductors via the optional automatic
                                transfer unit. Thanks to proven AC coupling, the
                                Sunny Boy Storage is ideally suited to new and
                                retrofitted systems. The integrated webserver
                                enables fast and easy commis-sioning, which is
                                also possible via smartphone or laptop. Energy
                                flows in the household are fully transparent
                                thanks to the direct connection to Sunny Portal
                                and Sunny Places.
                            </p>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={product3}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
                <InvertorTypes />
            </div>
        )
    }
}

export default SolarStringInvertor
