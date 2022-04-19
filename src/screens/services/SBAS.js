import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import battery from '../../assests/battery.png'
import serviceimage4 from '../../assests/serviceimage4.jpg'
import { Helmet } from 'react-helmet';
import BatteriesTypes from './../products/BatteriesTypes';
class SBAS extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>
                    Solar Batteries and Storage | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='SLM Solar battery storage can help you take control of your electric bills and protect you from power outages using clean energy day and night.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>Reliable and Affordable Solar Batteries and Storage</h1>
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
                                SLM Solar offers a different solutions for solar power and battery storage that enables                                 you at any time to access
                                the sun’s free, plentiful power .{' '}
                            </p>
                            <p>
                                {' '}
                                Each type of solar system utilise the sunlight
                                during daytime to generate green power. In case
                                of adding batteries, the extra power will be
                                exported to the solar batteries with a solar
                                offset system and a hybrid solar system. Solar
                                batteries operate during the day as power
                                storage provided by solar panels and can be used
                                by night or during blackout.{' '}
                            </p>

                            <img
                                className='img-thumbnail my-2'
                                src={serviceimage4}
                                alt='Domestic Solar System'></img>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={battery}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
                <BatteriesTypes/>
            </div>
        )
    }
}

export default SBAS
