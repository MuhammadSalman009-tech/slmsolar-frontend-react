import React from 'react'
import refer from '../assests/refer.png'
import { Helmet } from 'react-helmet';
const ReferUs = () => {
    return (
        <div>
            <Helmet>
                <title>Refer us| Solar Systems | SLM Solar</title>
                <meta
                    name='description'
                    content='Starting refer us today.'></meta>
            </Helmet>
            <div className='container py-5'>
                <h2 className='text-center'>Refer Us!</h2>
                <div className='row m-0 my-2'>
                    <div className='col-md-6'>
                        <div>
                            <img
                                className='img-fluid'
                                src={refer}
                                alt='refer us illustration'
                            />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                        <p>
                            Start referring today by introducing us to your
                            network. We’ll explain how to save money from
                            sunshine. Depending on the completion of
                            installation and the system size, you will receive a
                            thank you present from us. How’s That!!!!!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferUs
