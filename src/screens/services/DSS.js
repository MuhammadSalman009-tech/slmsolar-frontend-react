import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import house from '../../assests/house.png'
import video1 from '../../assests/video1.mp4'
import { Helmet } from 'react-helmet'
class DSS extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>
                        Domestic Solar System | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='We supply low cost home solar systems and panels for Homes. Complete home system w/ panels, inverter and mount at low prices.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>
                                Best and Cost Effective Domestic Solar Systems
                            </h1>
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
                                SLM Solar gives you the most cost-effective
                                solar system solution for Home. For both the
                                residential and business sectors in Australia,
                                Solar hybrid system includes solar panels,
                                inverters and backups. For residential buildings
                                SLM Solar provides Hybrid solar system.{' '}
                            </p>
                            <p>
                                {' '}
                                The energy and cost reduction for domestic
                                rooftop solar power system users is well known
                                for our systems installed. By minimising the
                                energy use and optimising the use of your solar
                                panel, they reduce power charges. we have a
                                broad range of renewable energy services. Our
                                home solutions solar system is as follows:{' '}
                            </p>

                            <ul className='list-group my-2'>
                                <li className='list-group-item'>
                                    <h2>
                                        {' '}
                                        Affordable Solar System Solution for
                                        Home{' '}
                                    </h2>
                                    SLM Solar gives you the most cost-effective
                                    solar system solution for Home. Regarding
                                    the residential sector in Australia, we
                                    provide Solar hybrid system includes solar
                                    panels, inverters and backups.
                                </li>
                                <li className='list-group-item'>
                                    The energy and cost of domestic solar power
                                    systems reduction for domestic users is well
                                    known for our systems installed. By
                                    minimising the power distributer use and
                                    optimising the use of your solar panels,
                                    this will assure to reduce the electricity
                                    bills. we have a broad range of renewable
                                    energy services.
                                </li>
                            </ul>
                            <video
                                className='shadow rounded-lg'
                                autoPlay
                                controls
                                width='100%'
                                height='auto'>
                                <source src={video1} />
                            </video>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={house}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DSS
