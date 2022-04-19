import React from 'react'
import brand1 from '../../assests/brand1.png'
import brand2 from '../../assests/brand2.png'
import brand3 from '../../assests/brand3.png'
import brand4 from '../../assests/brand4.png'
import brand5 from '../../assests/brand5.png'
import brand6 from '../../assests/brand6.png'
import brand7 from '../../assests/brand7.png'
import brand8 from '../../assests/brand8.png'
import brand9 from '../../assests/brand9.png'
import brand10 from '../../assests/brand10.png'
import brand11 from '../../assests/brand11.png'
import brand12 from '../../assests/brand12.png'
import brand13 from '../../assests/brand13.png'
import brand14 from '../../assests/brand14.png'
import brand15 from '../../assests/brand15.png'
import { useHistory } from 'react-router-dom'

const Brands = () => {
    const history = useHistory()
    const brands = [
        {
            img: brand1,
            url: 'https://solar.huawei.com/au',
            alt: 'Solar Huawei',
        },
        {
            img: brand2,
            url: 'https://www.sma-australia.com.au/',
            alt: 'Sma Australia',
        },
        {
            img: brand3,
            url: 'https://www.fronius.com/en-au/australia',
            alt: 'Fronius',
        },
        { img: brand4, url: 'http://jinkosolar.com.au/', alt: 'Jinko Solar' },
        { img: brand5, url: 'https://en.byd.com/energy/', alt: 'Byd' },
        {
            img: brand6,
            url: 'https://www.longi-solar.com.au/',
            alt: 'Longi Solar',
        },
        { img: brand7, url: 'https://new.abb.com/au', alt: 'Abb' },
        {
            img: brand8,
            url: 'https://www.risenenergy.com.au/',
            alt: 'Risen Enery',
        },
        { img: brand9, url: 'https://www.ginverter.com/', alt: 'Ginverter' },
        {
            img: brand10,
            url: 'https://www.sungrowpower.com/en/home',
            alt: 'Sungrow power',
        },
        {
            img: brand11,
            url: 'https://www.trinasolar.com/us',
            alt: 'Trina Solar',
        },
        { img: brand12, url: 'https://www.ht-saae.com.au/', alt: 'HT SAAE' },
        { img: brand13, url: 'https://www.lgenergy.com.au/', alt: 'LG Energy' },
        { img: brand14, url: 'https://www.alpha-ess.com/', alt: 'Alpha Ess' },
        { img: brand15, url: 'https://www.talesun-eu.com/', alt: 'Talesum' },
    ]
    return (
        <div className='my-2 py-2 shadow'>
            <h2 className='text-center my-5'>Brands we Deal in</h2>
            <div className='container-fluid mb-5'>
                <div className='row m-0 d-flex justify-content-center '>
                    {brands.map((b) => (
                        <div className='m-1 my-2'>
                            <img
                                onClick={() => history.push(b.url)}
                                className='px-2 cursor-pointer'
                                src={b.img}
                                alt={b.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
