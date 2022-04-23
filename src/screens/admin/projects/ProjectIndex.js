import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import axios from 'axios'
import './projects.css'

export default function ProjectIndex() {
    const [projects, setProjects] = useState([])
    const [deleteProjectID, setDeleteProjectID] = useState('')

    useEffect(() => {
        axios.get(BackendURL + 'api/projects').then((response) => {
            // setProjects(response.data.data)
            setProjects(response.data.data)
            console.log(projects)
        })
    }, [])
    function deleteTestimonial() {
        axios
            .delete(BackendURL + 'api/projects/' + deleteProjectID, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                if (response.status == 204) {
                    setProjects(
                        projects.filter(function (project) {
                            return project.id !== deleteProjectID
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
                        <h5>Projects</h5>
                        <Link
                            to='/admin/projects/create'
                            className='btn btn-primary'>
                            <i class='fa fa-plus'></i> Add Project
                        </Link>
                    </div>
                    <table class='table'>
                        <tbody>
                            <tr class='bg-primary text-white'>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Video</th>
                                <th>Actions</th>
                            </tr>
                            {projects.map((project, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{project.name}</td>
                                    <td>
                                        <video
                                            className='shadow rounded-lg'
                                            controls
                                            width='200'
                                            height='auto'>
                                            <source
                                                src={BackendURL + project.video}
                                            />
                                        </video>
                                    </td>
                                    <td>
                                        <Link
                                            className='btn btn-sm btn-warning'
                                            to={`/admin/projects/${project.id}/edit`}>
                                            Edit
                                        </Link>
                                        <button
                                            className='btn btn-sm btn-danger mx-1'
                                            data-toggle='modal'
                                            data-target='#exampleModal'
                                            onClick={() =>
                                                setDeleteProjectID(project.id)
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
