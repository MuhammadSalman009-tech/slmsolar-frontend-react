import React from 'react'
import product3 from '../../assests/product3.png'
import product5 from '../../assests/product5.png'
import product4 from '../../assests/product4.png'
import InvertorTypes from './InvertorsTypes';

const Invertors = () => {
    const products = [
        {
            name: 'Solar String Invertor',
            src: product3,
            url: '/products/solar-string-invertor',
        },
        {
            name: 'Micro Invertor',
            src: product5,
            url: '/products/micro-invertor',
        },
        {
            name: 'Hybrid Invertor',
            src: product4,
            url: '/products/hybrid-invertor',
        },
    ]
    return (
        <div>
            <div className='text-center dblue my-3'>
                <h2> Types of Invertors </h2>
                <p> We offer the best quality solar products </p>
            </div>
            <div className='container my-2'>
                <div className='row m-0 d-flex justify-content-center flex-wrap'>
                    
                    {products.map((p) => (
                        <div className='col-md-6 col-lg-4'>
                            <a href={p.url}>
                                <div className='d-flex flex-column align-items-center my-2 rounded-lg shadow  hvr-sweep-to-top p-2'>
                                    <img
                                        className='img-fluid'
                                        src={p.src}
                                        alt={p.name}
                                    />
                                    <h5 className='my-2'> {p.name} </h5>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <InvertorTypes/>
        </div>
    )
}

export default Invertors
