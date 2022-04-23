import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './sidenav.css'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
export default function SideNav() {
    let history = useHistory()
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        email_verified_at: '',
        updated_at: '',
        created_at: '',
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    function Logout() {
        localStorage.clear()
        history.push('/login')
    }
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
                    <div class='dropdown'>
                        <button
                            class='btn btn-light dropdown-toggle'
                            type='button'
                            id='dropdownMenuButton'
                            data-toggle='dropdown'
                            aria-expanded='false'>
                            {user.name}
                        </button>
                        <div
                            class='dropdown-menu'
                            aria-labelledby='dropdownMenuButton'>
                            <Link
                                class='dropdown-item'
                                to={`/admin/profile/${user.id}`}>
                                Profile
                            </Link>
                            <button
                                class='dropdown-item'
                                onClick={() => Logout()}>
                                Logout
                            </button>
                            <a class='dropdown-item' href='#'>
                                Something else here
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
