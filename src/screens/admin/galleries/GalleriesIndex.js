import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import axios from 'axios'
import './galleries.css'
import AuthenticatedUser from '../../auth/AuthenticatedUser'

export default function GalleriesIndex() {
    AuthenticatedUser()
    const [galleries, setGalleries] = useState([])
    const [deleteGalleryID, setDeleteTestimonialID] = useState('')

    useEffect(() => {
        axios.get(BackendURL + 'api/galleries').then((response) => {
            // setGalleries(response.data.data)
            setGalleries(response.data.data)
            // console.log(galleries)
        })
    }, [])
    function deleteTestimonial() {
        axios
            .delete(BackendURL + 'api/galleries/' + deleteGalleryID, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                if (response.status == 204) {
                    setGalleries(
                        galleries.filter(function (gallery) {
                            return gallery.id !== deleteGalleryID
                        })
                    )
                }
            })
    }
    return (
        <div className='row'>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Are you sure you want to delete?
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body d-flex justify-content-end'>
                            <button
                                type='button'
                                className='btn btn-secondary btn-sm m-1'
                                data-dismiss='modal'>
                                Cancel
                            </button>
                            <button
                                type='button'
                                className='btn btn-sm btn-warning m-1'
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
                        <h5>Galleries</h5>
                        <Link
                            to='/admin/galleries/create'
                            className='btn btn-primary'>
                            <i className='fa fa-plus'></i> Add Gallery
                        </Link>
                    </div>
                    <table className='table'>
                        <tbody>
                            <tr className='bg-primary text-white'>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Gallery</th>
                                <th>Actions</th>
                            </tr>
                            {galleries.map((gallery, index) => (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{gallery.name}</td>
                                    <td width={300}>
                                        <img
                                            width={100}
                                            src={BackendURL + gallery.image1}
                                            className='thumb-img mt-2 mr-2'
                                        />
                                        <img
                                            width={100}
                                            src={BackendURL + gallery.image2}
                                            className='thumb-img mt-2 mr-2'
                                        />
                                        <img
                                            width={100}
                                            src={BackendURL + gallery.image3}
                                            className='thumb-img mt-2 mr-2'
                                        />
                                        {gallery.image4 ? (
                                            <img
                                                width={100}
                                                src={
                                                    BackendURL + gallery.image4
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image5 ? (
                                            <img
                                                width={100}
                                                src={
                                                    BackendURL + gallery.image5
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image6 ? (
                                            <img
                                                width={100}
                                                src={
                                                    BackendURL + gallery.image6
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image7 ? (
                                            <img
                                                width={200}
                                                src={
                                                    BackendURL + gallery.image7
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image8 ? (
                                            <img
                                                width={200}
                                                src={
                                                    BackendURL + gallery.image8
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image9 ? (
                                            <img
                                                width={200}
                                                src={
                                                    BackendURL + gallery.image9
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {gallery.image10 ? (
                                            <img
                                                width={200}
                                                src={
                                                    BackendURL + gallery.image10
                                                }
                                                className='thumb-img mt-2 mr-2'
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                    <td>
                                        {/* <Link
                                            className='btn btn-sm btn-warning'
                                            to={`/admin/galleries/${gallery.id}/edit`}>
                                            Edit
                                        </Link> */}
                                        <button
                                            className='btn btn-sm btn-danger mx-1'
                                            data-toggle='modal'
                                            data-target='#exampleModal'
                                            onClick={() =>
                                                setDeleteTestimonialID(
                                                    gallery.id
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
