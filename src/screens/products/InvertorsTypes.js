import React from 'react'
import invertor1 from '../../assests/invertor1.png'
import invertor2 from '../../assests/invertor2.png'
import invertor3 from '../../assests/invertor3.png'
import invertor4 from '../../assests/invertor4.png'
import invertor5 from '../../assests/invertor5.png'
import invertor6 from '../../assests/invertor6.png'

import { Link } from 'react-router-dom'

const InvertorTypes = () => {
    const products = [
        {
            name: 'Huawei Invertors',
            description: `Huawei is a leading global ICT and network energy solution provider, with an established presence in all major solar markets worldwide. Over 96,000 of Huawei’s 194,000 employees working directly in R&D. Huawei Fusion Solar® is a fully-digitalised Smart PV Solution, including new generation string inverters, Huawei Fusion Solar® is smart, safe and reliable, consistently delivering increased yields whilst reducing operations and maintenance costs. 
            `,
            contact: 'To know more about ',
            src: invertor1,
            order: 'col-12 col-md-8',
        },
        {
            name: 'Fronius Invertors',
            description: `Fronius is an Austrian company stablished in 1945, Fronius  specializing in welding technology, photovoltaics, and battery charging technology. With more than 5,400 employee who are shaping a sustainable future with innovation, quality, and exceptional service. Fronius products are in demand around the world, which is why Company are now represented by 34 subsidiaries on five continents. With services and inverter and storage systems for optimizing energy yields, Fronius are one of the leading suppliers in the photovoltaic industry. 
            `,
            contact: 'To know more about ',
            src: invertor2,
            order: 'col-12 col-md-8 order-2',
        },
        {
            name: 'SMA Solar Invertors',
            description: `Innovative and sustainable key technologies are prerequisites for renewable energy supply. More than 3,000 employees from 18 countries work to ensure that SMA is actively helping to promote the production and development of PV system technology worldwide. SMA is the only inverter manufacturer worldwide that offers the right inverter for every module type and system size, for small residential systems, medium-sized commercial systems and large-scale plants, grid-connected photovoltaic systems, and off-grid and hybrid systems.
            Over 35 years, SMA has been setting technological trends and driving the development of renewable energies.
           `,
            contact: 'To know more about ',
            src: invertor3,
            order: 'col-12 col-md-8',
        },
        {
            name: 'Sungrow Invertors',
            description: `Sungrow Power Supply Co., Ltd is the world’s most bankable inverter brand with over 100 GW installed worldwide as of December 2019. Founded in 1997 .
            Sungrow is a leader in the research and development of solar inverters with the largest dedicated R&D team in the industry and a broad product portfolio offering PV inverter solutions and energy storage systems for utility-scale, commercial & industrial, and residential applications, as well as internationally recognized floating PV plant solutions. With a strong 23-year track record in the PV space, Sungrow products power installations in over 60 countries, maintaining a worldwide market share of over 15%. As a leader of innovation in the solar industry,
            In 2019, Sungrow launched the world’s largest inverter factory, once fully operational, the global annual production capacity will reach 50 GW, including 3 GW of India factory., 
            `,
            contact: 'To know more about ',
            src: invertor4,
            order: 'col-12 col-md-8 order-2',
        },
        {
            name: 'Solis Inverter ',
            description: `Established in 2005, Ginlong Technologies is one of most experienced and largest manufacturers of solar inverters.
            .Ginlong's cost-effective solutions for residential, commercial, and utility-scale users deliver value at every level of the 
            solar supply chain, engaging both homeowners and businesses, as well as power producers and renewable energy 
            investors across the globe.
            Presented under the Solis brand, the company’s solar inverter product line uses innovative string technology to deliver
             first class reliability, validated under the most stringent international certifications.
            Combining a global supply chain with world-class R&D and manufacturing capabilities, Ginlong optimizes its Solis inverters
             for each regional market, servicing and supporting its customers with its team of local experts.
            Proven bankability has attracted support from world leading financial institutions, ensuring solid long-term returns on 
            investment. Working with stakeholders to accelerate the worlds journey towards a more sustainable future.
            `,
            contact: 'To know more about ',
            src: invertor5,
            order: 'col-12 col-md-8',
        },
        {
            name: 'Growatt Invertors',
            description: ` Founded in 2010, Growatt  is a global leader of smart energy solutions and provides residential, commercial and utility-scale PV inverters, energy storage, microgrid systems and smart energy management solutions. Growatt ranks among global top 10 PV inverter suppliers according to IHS Markit and Wood Mackenzie.
            Growatt invests heavily in research and development. The R&D team at Growatt has more than 400 professional engineers, most of whom have over 15 years of experience in the industry. 
             By the first half of 2020, Growatt had shipped over 2 million inverters to more than 100 countries around the world.
            `,
            contact: 'To know more about ',
            src: invertor6,
            order: 'col-12 col-md-8 order-2',
        },
    ]
    return (
        <div className='container-fluid b-grey mt-5 py-3'>
            <div>
                <div className='text-center dblue my-3'>
                    <h2>Best quality solar Invertors</h2>
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

export default InvertorTypes
