import React from 'react'
import { Link } from 'react-router-dom'
import solar_panel from '../../assests/solar-panel.png'
import serviceimage2 from '../../assests/serviceimage2.jpg'
import { Helmet } from 'react-helmet'

class CPS extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>
                        Commercial Solar System | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='Solar system for commercial and industrial buildings. SLM Solar can offer the following solutions for your solar power needs. We are solar energy specialists driven to create an affordable and sustainable energy future for commercial and industrial entities in the region.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h1>Best Commercial Solar System for Business</h1>
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
                                Install SLM Solar Electric System and transform
                                your company to a power generation system.
                                Choose SLM Solar Installation, watch your power
                                savings increase every year after switching to
                                Solar Energy System.{' '}
                            </p>
                            <p>
                                {' '}
                                As SLM Solar Design uses a solar energy system
                                for business applications, we also considered
                                sun as exposure. A roof but sometimes another
                                system is required. It is the best and most
                                popular commercial solar power systems solution.
                                Customized Solar Systems take your houses, power
                                and stars into consideration.{' '}
                            </p>
                            <p>
                                {' '}
                                Our commercial solar power system cost is very
                                less and also useful for everyone.{' '}
                            </p>

                            <img
                                className='img-thumbnail my-2'
                                src={serviceimage2}
                                alt='Domestic Solar System'></img>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={solar_panel}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CPS
