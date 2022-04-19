import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import products2 from '../../assests/products2.jpeg'
import product3 from '../../assests/product3.png'

class SolarInvertor extends React.Component {
    render() {
        return (
            <div className=''>
                <div className='container my-5'>
                    <div className='row m-0 d-flex justify-content-between'>
                        <div className='col-md-8'>
                            <h2>Solar Invertor</h2>
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
                            <img
                                className='img-thumbnail my-2'
                                src={products2}
                                alt='Domestic Solar System'></img>
                            <p>
                                LMS Energy Services offersyou the best solar
                                inverter price in australia. You can get all
                                brands of 2020 solar sma sunny boy, hybrid
                                inverter, solar power inverter, micro inverter,
                                goodwe inverter, solax inverter, solar panel
                                inverter, huawei inverter, sungrow inverter, abb
                                solar inverter, enphase micro inverter with
                                discounted price in australia
                            </p>
                            <p>
                                Lms energy services has the largest collection
                                of solar panel and solar inverter in australia,
                                you can visit and get different kind of solar
                                inverter like solar webfronius, off grid
                                inverter, on grid inverter, pv inverter, fronius
                                web, enphase iq8, string inverter, solar
                                inverter battery, solaredge hd wave, delta solar
                                inverter, saj inverter, fronius configurator. We
                                are solar inverter system in Australia.
                            </p>
                            <p>
                                Lms energy services offers their customer
                                various kws of solar inverter for their
                                feasibility and choices like fronius symo 10kw,
                                6.6 kw solar system with 5kw inverter, growatt
                                5kw inverter, fronius 5kw inverter, goodwe 5kw
                                inverter, solis 5kw inverter, 5kw inverter
                                solar, solax 4kw inverter, goodwe 5kw hybrid
                                inverter, 5kw abb inverter.
                            </p>
                            <p>
                                We are solar inverter supplier and distributor
                                in Australia. We provide best solar inverters
                                for home, offices, house and business. Get our
                                solar inverter price list and take benefit with
                                our services.
                            </p>
                            <p>
                                For further information regarding solar inverter
                                and solar inverter price list contact us
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
            </div>
        )
    }
}

export default SolarInvertor
