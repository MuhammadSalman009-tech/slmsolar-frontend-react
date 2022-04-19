import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import products3 from '../../assests/products3.jpeg'
import product2 from '../../assests/product2.png'

import battery1 from '../../assests/battery1.jpg'
import battery2 from '../../assests/battery2.png'
import battery3 from '../../assests/battery3.jpg'
import { Helmet } from 'react-helmet'
import BatteriesTypes from './BatteriesTypes'
class SolarBattery extends React.Component {
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>Solar Batteries | Solar Systems | SLM Solar</title>
                    <meta
                        name='description'
                        content='SLM Solar battery modules provide 80% storage. 12v 100AH, 24V 50AH, 100Ah 48V Lithium Batteries in Australia.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0'>
                        <div className='col-md-8'>
                            <h1>
                                Best Solar Batteries for Solar Projects 2021
                            </h1>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <Link to='/contact'>
                                <button className='btn btn-lg btn-info b-lblue grey'>
                                    Request a Quote Now
                                </button>
                            </Link>
                        </div>
                        <div className='col-lg-8'>
                            <img
                                className='img-thumbnail my-2'
                                src={products3}
                                alt='Domestic Solar System'></img>
                            <p>
                                SLM Solar Services offers you the best solar
                                batteries price in australia. You can get all
                                brands of 2021 energy batteries like tesla
                                powerwall, solar charge controller, charge
                                controller, lithium ion solar battery, shoto
                                battery, alpha battery, byd solar battery, lg
                                solar battery with discounted price in Australia
                            </p>
                            <p>
                                SLM Solar services has the largest collection of
                                solar panel batteries and solar panel battery
                                storage system for home. We also deal lithium
                                ion battery for solar storage, on grid solar
                                system with battery backup, dry cell battery,
                                solar power solution for home, diy powerwall,
                                tesla solar battery, house battery. We are solar
                                battery system supplier and distributor in
                                Australia.
                            </p>
                            <h2>Benefits Of Dry Battery:</h2>
                            <p>Excellent energy and backup applications</p>
                            <p>Secure and user friendly</p>
                            <p>Some electric batteries are better than that</p>
                            <p>Sun Dry Batteries Long Lived</p>
                            <p>Batteries of low cost and decent design</p>
                            <p>
                                Best for applications for telecommunications and
                                high costs
                            </p>
                            <p>
                                For further information regarding solar inverter
                                and solar inverter price list contact us
                            </p>
                            <p></p>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={product2}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                    <div className='row m-0 d-flex justify-content-between'></div>
                </div>
                <BatteriesTypes />
            </div>
        )
    }
}

export default SolarBattery
