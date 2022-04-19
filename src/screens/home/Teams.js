import React from 'react'
import team1 from '../../assests/team1.png'
import team2 from '../../assests/team2.png'
import team3 from '../../assests/team3.png'

const Teams = () => {
    const teams = [
        {
            name: 'Fred Buster',
            position: 'Director OPS',
            src: team1,
        },
        {
            name: 'Abdullah Yafeai',
            position: 'Founder',
            src: team2,
        },
        {
            name: 'Lisa Hoffman​',
            position: 'Director HR',
            src: team3,
        },
    ]
    return (
        <div className='b-dblue py-5'>
            <h2 className='text-center grey mb-4'>Our Team</h2>
            <div className='container'>
                <div className='row m-0 d-flex justify-content-center align-items-center'>
                    {teams.map((t) => (
                        <div className='col-lg-4'>
                            <div className='d-flex flex-column align-items-center grey '>
                                <img src={t.src} alt={t.name} />
                                <h4 className='mt-1'>{t.name}</h4>
                                <p>{t.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Teams
