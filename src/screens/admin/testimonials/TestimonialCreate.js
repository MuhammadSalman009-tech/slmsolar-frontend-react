import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import '../dashboard.css'
export default function TestimonialCreate() {
    const [name, setName] = React.useState('')
    const [about, setAbout] = React.useState('')
    const [profile, setProfile] = React.useState(null)
    let history = useHistory()

    const handleSubmit = (e) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('about', about)
        formData.append('profile', profile)
        console.log(formData)
        e.preventDefault()
        // console.log(email, password)
        axios
            .post(BackendURL + 'api/testimonials', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response)
                // if (response.data.status == 'success') {
                //     localStorage.setItem(
                //         'user',
                //         JSON.stringify(response.data.user)
                //     )
                //     localStorage.setItem('token', response.data.token)
                //     localStorage.setItem('loggedIn', true)
                //     history.push('/admin/dashboard')
                // }
            })
    }
    return (
        <div className='row'>
            <div className='col-md-3'>
                <SideNav />
            </div>
            <div className='col-md-9'>
                <div className='container mt-4'>
                    <form onSubmit={handleSubmit} className='dashboard-form'>
                        <h6>Add New Testimonial</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Person Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Muhammad Salman'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='about' className='form-label'>
                                About
                            </label>
                            <textarea
                                className='form-control'
                                id='about'
                                name='about'
                                onChange={(e) => setAbout(e.target.value)}
                                required
                                rows='3'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label for='profile' className='form-label'>
                                Profile Image
                            </label>
                            <input
                                type='file'
                                name='profile'
                                required
                                className='form-control'
                                onChange={(e) => setProfile(e.target.files[0])}
                            />
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Add Testimonial
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
