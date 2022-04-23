import React from 'react'
import { Link } from 'react-router-dom'
import './sidenav.css'
export default function SideNav() {
    return (
        <div className='flex-shrink-0 p-3 bg-light'>
            <ul className='list-unstyled ps-0'>
                <li className='mb-1'>
                    <Link
                        className='btn btn-primary btn-sm d-block align-items-center mb-2'
                        to='/admin/testimonials'>
                        Testimonials
                    </Link>
                    <Link
                        className='btn btn-primary btn-sm d-block align-items-center mb-2'
                        to='/admin/projects'>
                        Projects
                    </Link>
                    <Link
                        className='btn btn-primary btn-sm d-block align-items-center mb-2'
                        to='/admin/galleries'>
                        Galleries
                    </Link>
                </li>
                <li className='border-top my-3'></li>
                <li className='mb-1'>
                    <button
                        className='btn btn-toggle align-items-center rounded collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#account-collapse'
                        aria-expanded='false'>
                        Account
                    </button>
                </li>
            </ul>
        </div>
    )
}
