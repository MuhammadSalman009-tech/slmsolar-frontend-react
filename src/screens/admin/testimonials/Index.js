import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import axios from 'axios'
import './testimonials.css'

export default function Index() {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get(BackendURL + 'api/testimonials').then((response) => {
            // setTestimonials(response.data.data)
            setTestimonials(response.data.data)
            console.log(testimonials)
        })
    }, [])
    return (
        <div className='row'>
            <div className='col-md-3'>
                <SideNav />
            </div>
            <div className='col-md-9'>
                <div className='container mt-3'>
                    <h5>Testimonials</h5>
                    <table class='table'>
                        <tbody>
                            <tr class='bg-primary text-white'>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>About</th>
                                <th scope='col'>Profile</th>
                                <th>Actions</th>
                            </tr>
                            {testimonials.map((testimonial, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{testimonial.name}</td>
                                    <td className='about-content'>
                                        {testimonial.about}
                                    </td>
                                    <td>
                                        <img
                                            src={
                                                BackendURL + testimonial.profile
                                            }
                                            alt={testimonial.name}
                                            className='thumb-img'
                                        />
                                    </td>
                                    <td>
                                        <Link
                                            className='btn btn-sm btn-warning'
                                            to='/admin/testimonials/edit'>
                                            Edit
                                        </Link>
                                        <button className='btn btn-sm btn-danger mx-1'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
