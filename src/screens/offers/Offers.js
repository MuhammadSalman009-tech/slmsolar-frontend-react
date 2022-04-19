import React from 'react'
import { Link } from 'react-router-dom'
import house from '../../assests/house.png'
import serviceimage from '../../assests/serviceimage.jpg'
import { Helmet } from 'react-helmet'

const Offers = () => {
    const ltf = [
        {
            name: '6.6KW PV Solar System',
            price: '$2599',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 24Kw Hour Per Day. Includes :',
            li1: '20 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
        {
            name: '7.92KW PV Solar System',
            price: '$3299',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 32Kw Hour Per Day. Includes:',
            li1: '20 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
        {
            name: '10 KW PV Solar System',
            price: '$4250',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 32Kw Hour Per Day. Includes:',
            li1: '20 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
        {
            name: '15 KW PV Solar System',
            price: '$$$$$',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 32Kw Hour Per Day. Includes:',
            li1: '50 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
        {
            name: '20 KW PV Solar System',
            price: '$$$$$',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 32Kw Hour Per Day. Includes:',
            li1: '80 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
        {
            name: '26 KW PV Solar System',
            price: '$$$$$',
            des:
                'Design, Supply and install Single Phase system, This System Generates Around 32Kw Hour Per Day. Includes:',
            li1: '80 Of Top Ten Tire 1 Solar Panels Half',
            li2: 'Cut MONO PERC Black Frame with 15',
            li3: 'Years Quality Assurance and 25 years Power output guarantee',
        },
    ]
    return (
        <div className=' mt-5'>
            <Helmet>
                <title>Best Offers | Solar Systems | SLM Solar</title>
                <meta
                    name='description'
                    content='Best limited time offers from slm solar systems'></meta>
            </Helmet>
            <div clasName='my-3 '>
                <h3 className='text-center'>Our Limited Time Offers!</h3>
                <div className='row m-0'>
                    {ltf.map((o) => (
                        <div className='col-md-4'>
                            <div className='card yellow my-3 shadow rounded-lg hvr-grow'>
                                <div className='card-body'>
                                    <h5 className='card-title dblue'>
                                        {o.name}
                                    </h5>
                                    {/* <h6 className='card-title mb-2 '>
                                        {o.price}
                                    </h6> */}
                                    <p className='card-text'>{o.des}</p>
                                    <ul className='list-group'>
                                        <li className='list-group-item b-dblue grey'>
                                            {o.li1}
                                        </li>
                                        <li className='list-group-item  b-dblue grey'>
                                            {o.li2}
                                        </li>
                                        <li className='list-group-item  b-dblue grey'>
                                            {o.li3}
                                        </li>
                                    </ul>
                                </div>
                                <div className='d-flex justify-content-center my-2'>
                                    <Link to='/contact'>
                                        <button className='btn btn-lg btn-info b-lblue grey'>
                                            Request a Quote Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers
