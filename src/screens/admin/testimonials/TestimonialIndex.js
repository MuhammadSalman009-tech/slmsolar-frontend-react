import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import axios from 'axios'
import './testimonials.css'
import authenticatedUser from '../../auth/AuthenticatedUser'

export default function TestimonialIndex() {
    authenticatedUser()
    const [testimonials, setTestimonials] = useState([])
    const [deleteTestimonialID, setDeleteTestimonialID] = useState('')

    useEffect(() => {
        axios.get(BackendURL + 'api/testimonials').then((response) => {
            // setTestimonials(response.data.data)
            setTestimonials(response.data.data)
            console.log(testimonials)
        })
    }, [])
    function deleteTestimonial() {
        axios
            .delete(BackendURL + 'api/testimonials/' + deleteTestimonialID, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                if (response.status == 204) {
                    setTestimonials(
                        testimonials.filter(function (testimonial) {
                            return testimonial.id !== deleteTestimonialID
                        })
                    )
                }
            })
    }
    return (
        <div className='row'>
            <div
                class='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div class='modal-dialog'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title' id='exampleModalLabel'>
                                Are you sure you want to delete?
                            </h5>
                            <button
                                type='button'
                                class='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-body d-flex justify-content-end'>
                            <button
                                type='button'
                                class='btn btn-secondary btn-sm m-1'
                                data-dismiss='modal'>
                                Cancel
                            </button>
                            <button
                                type='button'
                                class='btn btn-sm btn-warning m-1'
                                onClick={deleteTestimonial}
                                data-dismiss='modal'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <SideNav />
            </div>
            <div className='col-md-9'>
                <div className='container mt-3'>
                    <div className='d-flex justify-content-between my-2'>
                        <h5>Testimonials</h5>
                        <Link
                            to='/admin/testimonials/create'
                            className='btn btn-primary'>
                            <i class='fa fa-plus'></i> Add Testimonial
                        </Link>
                    </div>
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
                                            to={`/admin/testimonials/${testimonial.id}/edit`}>
                                            Edit
                                        </Link>
                                        <button
                                            className='btn btn-sm btn-danger mx-1'
                                            data-toggle='modal'
                                            data-target='#exampleModal'
                                            onClick={() =>
                                                setDeleteTestimonialID(
                                                    testimonial.id
                                                )
                                            }>
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
