import React from 'react'
import { Link } from 'react-router-dom'
import products1 from '../../assests/products1.jpeg'
import product1 from '../../assests/product1.png'
import solar1 from '../../assests/solar1.png'
import solar2 from '../../assests/solar2.png'
import solar3 from '../../assests/solar3.png'
import solar4 from '../../assests/solar4.png'
import solar5 from '../../assests/solar5.png'
import solar6 from '../../assests/solar6.png'
import solar7 from '../../assests/solar7.png'
import { Helmet } from 'react-helmet'
class SolarPannel extends React.Component {
    products = [
        {
            name: 'LONGI Solar',
            description: `LONGi supplies more than 30GW of high efficiency solar wafers and modules worldwide yearly, about a quarter of global market demand. LONGi is recognized as the world’s most valuable solar technology company with the highest market value.
 
            LONGi's products fulfilled 15% of new energy installations in the world each year and is the world's largest supplier of power generation equipment in the PV sector. 
            `,
            contact: 'To know more about ',
            src: solar1,
            order: 'col-12 col-md-8'
        },
        {
            name: 'Trina Solar',
            description: `Trina Solar delivers PV products, applications and services to promote global sustainable development. Through constant innovation, humanity.
            As of Oct. 2020, Trina Solar has delivered more than 60 GW of solar modules worldwide, ranked “Top 500 private enterprises in China”. In addition, solar PV project development, financing, design, construction, operations & management and one-stop system integration solutions for customers. Trina Solar has connected over 3GW of solar power plants to the grid worldwide. 
            `,
            contact: 'To know more about ',
            src: solar2,
            order: 'col-12 col-md-8 order-2'

        },
        {
            name: 'Jinko Solar',
            description: ` Jinko Solar is one of the largest and most innovative solar module manufacturers in the world. Jinko Solar has built a vertically integrated solar product value chain, with an integrated annual capacity of 20 GW for mono wafers, 11 GW for solar cells, and 25 GW for solar modules, as of September 30, 2020.
            `,
            contact: 'To know more about ',
            src: solar3,
            order: 'col-12 col-md-8 '

        },
        {
            name: 'Canadain Solar ',
            description: `Canadian Solar was founded in 2001 in Canada and is one of the world's largest and foremost solar power companies. It is a leading manufacturer of solar photovoltaic modules and provider of solar energy solutions and has a geographically diversified pipeline of utility-scale power projects in various stages of development. Over the past 19 years, Canadian Solar has successfully delivered over 46 GW of premium quality modules to customers in over 150 countries around the world. Canadian Solar is one of the most bankable companies in the solar industry, having been publicly listed on NASDAQ since 2006. 
            `,
            contact: 'To know more about ',
            src: solar4,
            order: 'col-12 col-md-8 order-2'

        },
        {
            name: 'Risen Energy ',
            description: ` Risen Energy is a hi-tech enterprise which is engaged in R&D, production, sales and service of solar modules, products of photovoltaic technology, solar terminal application and integration. Now the annual capacity of solar cells and module manufacturing is 11.1GW and Risen Energy enters into top ten of modules industry in 2019. There is a standard level PV laboratory, which is independent and received CNAS certification.  
            `,
            contact: 'To know more about ',
            src: solar5,
            order: 'col-12 col-md-8 '

        },
        {
            name: 'Talesun Solar',
            description: `Talesun Solar Technology Co., Ltd. was established in 2010 and is a wholly-owned subsidiary of Zhongli Group. Through more than 10 years of innovation and development, Talesun has become one of the world's top ten photovoltaic manufacturers, one of the largest photovoltaic power station developers in China, and the first-tier leader of Chinese photovoltaic manufacturers. Currently, Talesun's annual production capacity has expanded to 6GW photovoltaic single crystal high-efficiency cells and 10GW photovoltaic high-efficiency modules. 
            `,
            contact: 'To know more about ',
            src: solar6,
            order: 'col-12 col-md-8 order-2'

        },
        {
            name: 'HT Solar',
            description: `China Aerospace Science and Technology Corporation (CASC) is a large high-tech enterprise officially founded in 1999, but with a history dating back to 1956. Since its foundation, HT-SAAE focuses its business mainly on New Energy PV, Auto Parts and New Material Application. As early as 1999. To date, the company has developed a completely integrated PV industry supply chain (polysilicon, wafers, solar cells, PV modules & systems). in 2014 HT-SAAE achieved a ranking amongst the Top 10 Chinese PV Module Suppliers and for many years the company has been recognized as a 'Tier 1'​ Module Manufacturer. HT Solar Energy was estanblished in 2016 located in Istanbul,Turkey. 
            `,
            contact: 'To know more about ',
            src: solar7,
            order: 'col-12 col-md-8 '

        },
    ]
    render() {
        return (
            <div className=''>
                <Helmet>
                    <title>Solar Pannel | Solar Systems | SLM Solar</title>
                    <meta
                        name='description'
                        content='Higher efficiency means more savings. SLM Solar home solar panels produce 60% more energy over 25 years. Backed by the industry’s best warranty.'></meta>
                </Helmet>
                <div className='container my-5'>
                    <div className='row m-0'>
                        <div className='col-md-8'>
                            <h1>Best Solar Pannels in Affordable Price</h1>
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
                                src={products1}
                                alt='Domestic Solar System'></img>
                            <p>
                                SLM Solar is a solar company that works on solar
                                panels, and provides low cost of Solar pannels.
                                solar power accessories and installing a
                                reliable solar system with the best price . We
                                provide different categories of tire 1 solar
                                panels to guarantee a high quality and high
                                performance.{' '}
                            </p>
                            <p>
                                {' '}
                                For further information's and prices, please
                                don’t hesitate to contact us.{' '}
                            </p>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img
                                className='img-fluid my-2'
                                src={product1}
                                alt='Domestic Solar System'></img>
                        </div>
                    </div>
                </div>
                <div className='container-fluid b-grey mt-5 py-3'>
                    <div>
                        <div className='text-center dblue my-3'>
                            <h2>Best quality solar panels</h2>
                        </div>
                        {this.products.map((p, i) => (
                            <div className='row m-0'>
                                <div className='container bg-white shadow-lg rounded py-3 my-2 '>
                                    <div className='row m-0 '>
                                        <div className={p.order}>
                                            <div>
                                                <h3>{p.name}</h3>
                                                <p>{p.description}</p>
                                                <p className='font-weight-bold'>{p.contact + p.name}</p>
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
            </div>
        )
    }
}

export default SolarPannel
