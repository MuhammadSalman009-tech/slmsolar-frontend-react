import React from 'react'
import house from '../../assests/house.png'
import solar_panel from '../../assests/solar-panel.png'
import hybrid from '../../assests/hybrid.png'
import battery from '../../assests/battery.png'

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Domestic Solar System',
            src: house,
            url: '/services/domestic-power-system',
        },
        {
            id: 2,
            name: 'Commercial Solar Systems',
            src: solar_panel,
            url: '/services/commercial-power-system',
        },
        {
            id: 3,
            name: 'Hybird Solar System',
            src: hybrid,
            url: '/services/hybrid-solar-system',
        },
        {
            id: 4,
            name: 'Solar Batteries and Storage',
            src: battery,
            url: '/services/solar-batteries-and-storage',
        },
    ]
    return (
        <section>
            <div className='container-fluid my-5'>
                <div className='row m-0'>
                    <div className='col-sm-12 col-md-5 b-dblue grey rounded-lg my-2'>
                        <div className=' p-2 '>
                            <h3 className='my-3' id='services'>
                                Our Services
                            </h3>
                            <p>
                                Our services include site inspection, designs
                                and applying for connection approval.
                            </p>
                            <p>
                                {' '}
                                We analyze and prepare solutions for any
                                obstacles such as how shading will impact solar
                                production. In additional to shading analysis,
                                ensuring that the design fits the sit with no
                                issues. ​
                            </p>

                            <p>
                                {' '}
                                Since we believe that solar power should be
                                accessible to everyone, we specialize by
                                offering financing options that help you save on
                                your monthly bills immediately. We also believe
                                in making the installation process quick and
                                professional with a proper follow up without
                                leaving you hanging as SLM solar ensures you get
                                updated status of your installation. Initially
                                we will monitor your system performance to
                                ensure the best outcome.
                            </p>

                            <p>
                                {' '}
                                Most importantly, we are committed to build
                                meaningful local partnerships that bring more
                                than just energy savings to our local
                                communities as with SLM Solar, a better world
                                starts at home.
                            </p>

                            <p>
                                {' '}
                                A product warranty is provided by the
                                manufacturer, while workmanship warranty for 5
                                years is granted by SLM.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7 d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {services.map((s) => (
                                    <div className='col-12 col-md-6' key={s.id}>
                                        <a href={s.url}>
                                            <div className=' b-grey rounded-lg dblue p-2 my-2 hvr-grow'>
                                                <h5 className='ml-2 mt-2'>
                                                    {s.name}
                                                </h5>
                                                <center>
                                                    <img
                                                        className='my-3'
                                                        src={s.src}
                                                        alt={s.name}></img>
                                                </center>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
