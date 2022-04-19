import React from 'react'
import finance_img from '../../assests/finance.png'

const Finance = () => {
    return (
        <div className='my-2 py-2 shadow'>
            <h2 className='text-center my-5'>Our Finance Team</h2>
            <div className='container-fluid mb-5 '>
                <div className='row m-0 d-flex justify-content-center'>
                        <a className='m-2' href='https://brighte.com.au/'>
                            <img src={finance_img} alt='Finance Team' />
                        </a>
                        <a className='m-2' href='https://brighte.com.au/'>
                            <img src={finance_img} alt='Finance Team' />
                        </a>
                        <a className='m-2' href='https://brighte.com.au/'>
                            <img src={finance_img} alt='Finance Team' />
                        </a>
                        
                </div>
            </div>
        </div>
    )
}

export default Finance
