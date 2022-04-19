import React from 'react'
import battery1 from '../../assests/battery1.png'
import battery2 from '../../assests/battery2.png'
import battery3 from '../../assests/battery3.png'


import { Link } from 'react-router-dom'

const BatteriesTypes = () => {
    const products = [
        {
            name: 'Lg Chem  Batteries',
            description: `LG Chem, Ltd. is a globally diversified chemical company which manufactures a wide range of products, from petrochemical goods to high-value added plastics, and extends its chemical expertise into high-tech areas such as electronic materials and rechargeable batteries. Since its establishment in 1947, LG Chem has strengthened global presence in the petrochemical industry by expanding key businesses including ABS and PVC, namely ranging from premium products to daily commodities. Subsequently in the decade of 1990s, LG Chem successfully commercialized polarizer used in LCDs and has firmly maintained No.1 position in the global market by continuous investment in R&D. With significant market share in consumer, automotive and stationary applications, LG Chem is also one of the world’s largest lithium-ion battery manufacturers that powers electronic gadgets, Electric Vehicles(EV) and Energy Storage Systems(ESS). 
            `,
            contact: 'To know more about ',
            src: battery1,
            order: 'col-12 col-md-8',
        },
        {
            name: 'BYD Battereis',
            description: `BYD is a high-tech company devoted to technological innovations for a better life. BYD was founded in February 1995, and after more than 20 years of fast growth, the company has established over 30 industrial parks worldwide and has played a significant role in industries related to electronics, automobiles, new energy and rail transit. From energy generation and storage to its applications, BYD is dedicated to providing zero-emission energy solutions. 
            BYD enjoys rapid growth in automobile manufacturing. The pure electric vehicle under BYD brand will be advocated in North America, South America, Asia & Pacific region
            `,
            contact: 'To know more about ',
            src: battery2,
            order: 'col-12 col-md-8 order-2',
        },
        {
            name: 'Alpha Batteries',
            description: `Founded in 2012, AlphaESS is one of the leading energy storage solution and service providers in the globe. The company specializes in the residential and commercial market, aiming to deliver the most cost-effective and fit-for-purpose solutions.
            AlphaESS has 10+ subsidiaries providing local services and 40000+ systems actively running in over 50 countries, enabling millions of people to live with reliable, accessible and clean energy.
            
            `,
            contact: 'To know more about ',
            src: battery3,
            order: 'col-12 col-md-8',
        },
    ]
    return (
        <div className='container-fluid b-grey mt-5 py-3'>
            <div>
                <div className='text-center dblue my-3'>
                    <h2>Best quality solar Batteries</h2>
                </div>
                {products.map((p, i) => (
                    <div className='row m-0'>
                        <div className='container bg-white shadow-lg rounded py-3 my-2 '>
                            <div className='row m-0 '>
                                <div className={p.order}>
                                    <div>
                                        <h3>{p.name}</h3>
                                        <p>{p.description}</p>
                                        <p className='font-weight-bold'>
                                            {p.contact + p.name}
                                        </p>
                                        <Link to='/contact'>
                                            <button className='btn btn-lg btn-info b-lblue grey mb-3'>
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className=' col-12 col-md-4'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={p.src} alt={p.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BatteriesTypes
