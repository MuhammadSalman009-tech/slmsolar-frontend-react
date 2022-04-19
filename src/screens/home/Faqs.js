import React from 'react'

const Faqs = () => {
    const faqs = [
        {
            question: 'How do I find out how much I pay for electricity?',
            answer:
                'The best way to see how much electricity you’re paying (and how much electricity you use every month) is to review your power bill. Check out LMS Energy Services power bill reading guide to see just what to look for.',
        },
        {
            question: 'How does solar impact my property values?',
            answer:
                'Studies have shown that households with solar systems sell more for homes than without them. Your property value would only rise if your solar panel system is owned rather than rented. In most parts of the world, the solar system is more valuable than renovation in a kitchen.',
        },
        {
            question: 'What are the financial benefits of solar energy?',
            answer:
                'You save money on your energy bills by installing a solar power system on your property and protect yourself from energy prices in the future. How much you can save is based on your area’s electricity rates and solar policies, but going solar is an intelligent investment wherever you live.',
        },
        {
            question: 'What are my solar financing options?',
            answer:
                'You can buy your system in cash, buy a Solar Loan for buying your system or sign a solar lease / power purchases agreement (PPA). There are three options for solar finance. TheLMS Energy Services Instant Estimates tool can help you evaluate each solar financing option’s costs and savings for 20 years; its calculations are based on your roof plus your actual quota information from your area.',
        },
    ]
    return (
        <div className='my-4' id='faqs'>
            <h2 className='text-center my-3'>Frequently Asked Questions</h2>
            <div className='container'>
                {faqs.map((f, i) => (
                    <div>
                        <button
                            class='btn btn-info b-dblue grey w-100 text-left my-1'
                            type='button'
                            data-toggle='collapse'
                            data-target={'#e' + i.toString()}
                            aria-expanded='false'
                            aria-controls={'e' + i.toString()}>
                            <div className='d-flex justify-content-between'>
                                {f.question}
                                <i
                                    className='fa fa-chevron-down'
                                    aria-hidden='true'></i>
                            </div>
                        </button>
                        <div className='collapse' id={'e' + i.toString()}>
                            <div className='card card-body'>{f.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs
