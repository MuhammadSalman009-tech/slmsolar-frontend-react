import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { BackendURL } from '../../url'
import axios from 'axios'
import SideNav from '../../common/SideNav'
import AuthenticatedUser from './AuthenticatedUser'

export default function Profile() {
    AuthenticatedUser()
    let { id } = useParams()
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: '',
    })

    let history = useHistory()
    useEffect(() => {
        axios.get(BackendURL + 'api/user/' + id).then((response) => {
            setUser((prevUser) => {
                const updatedUser = {
                    ...prevUser,
                }
                updatedUser.name = response.data.name
                updatedUser.email = response.data.email
                return updatedUser
            })
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', user.name)
        formData.append('password', user.password)
        formData.append('email', user.email)
        axios
            .post(BackendURL + 'api/update/user/' + id, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                if (response.data.status == 200) {
                    localStorage.clear()
                    history.push('/login')
                }
            })
    }
    return (
        <div className='row'>
            <div className='col-md-3'>
                <SideNav />
            </div>
            <div className='col-md-9'>
                <div className='container mt-4'>
                    <form className='dashboard-form' onSubmit={handleSubmit}>
                        <h6>Edit Profile</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={user.name}
                                onChange={(e) =>
                                    setUser((user) => {
                                        const updatedUser = {
                                            ...user,
                                        }
                                        updatedUser.name = e.target.value

                                        return updatedUser
                                    })
                                }
                                required
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='email' className='form-label'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                value={user.email}
                                onChange={(e) =>
                                    setUser((user) => {
                                        const updatedUser = {
                                            ...user,
                                        }
                                        updatedUser.email = e.target.value

                                        return updatedUser
                                    })
                                }
                                required
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='password' className='form-label'>
                                Create New Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                value={user.password}
                                onChange={(e) =>
                                    setUser((user) => {
                                        const updatedUser = {
                                            ...user,
                                        }
                                        updatedUser.password = e.target.value

                                        return updatedUser
                                    })
                                }
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
