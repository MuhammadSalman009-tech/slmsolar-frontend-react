import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import { set } from 'date-fns'
import './testimonials.css'
export default function TestimonialEdit() {
    let { id } = useParams()
    const [testimonial, setTestimonial] = React.useState({
        name: '',
        about: '',
        profile: '',
        oldProfile: '',
    })

    let history = useHistory()
    useEffect(() => {
        axios.get(BackendURL + 'api/testimonials/' + id).then((response) => {
            setTestimonial((testimonial) => {
                const updatedTestimonial = {
                    ...testimonial,
                }
                updatedTestimonial.name = response.data.data.name
                updatedTestimonial.about = response.data.data.about
                updatedTestimonial.oldProfile = response.data.data.profile

                return updatedTestimonial
            })
            console.log(response.data.data)
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', testimonial.name)
        formData.append('about', testimonial.about)
        formData.append('profile', testimonial.profile)
        formData.append('oldProfile', testimonial.oldProfile)
        axios
            .post(BackendURL + 'api/testimonials/update/' + id, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response)
                if (response.status == 201) {
                    history.push('/admin/galleries')
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
                        <h6>Edit Testimonial</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Person Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Muhammad Salman'
                                value={testimonial.name}
                                onChange={(e) =>
                                    setTestimonial((testimonial) => {
                                        const updatedTestimonial = {
                                            ...testimonial,
                                        }
                                        updatedTestimonial.name = e.target.value

                                        return updatedTestimonial
                                    })
                                }
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
                                onChange={(e) =>
                                    setTestimonial((testimonial) => {
                                        const updatedTestimonial = {
                                            ...testimonial,
                                        }
                                        updatedTestimonial.about =
                                            e.target.value

                                        return updatedTestimonial
                                    })
                                }
                                required
                                rows='3'
                                value={testimonial.about}></textarea>
                        </div>
                        <div className='mb-3'>
                            <label for='profile' className='form-label'>
                                Profile Image
                            </label>
                            <input
                                type='file'
                                name='profile'
                                className='form-control'
                                onChange={(e) =>
                                    setTestimonial((testimonial) => {
                                        const updatedTestimonial = {
                                            ...testimonial,
                                        }
                                        updatedTestimonial.profile =
                                            e.target.files[0]

                                        return updatedTestimonial
                                    })
                                }
                            />
                            <input
                                type='hidden'
                                name='oldProfile'
                                className='form-control'
                                value={testimonial.oldProfile}
                            />
                            <img
                                src={BackendURL + testimonial.oldProfile}
                                className='edit-testimonial-img mt-2'
                            />
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Update Testimonial
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
