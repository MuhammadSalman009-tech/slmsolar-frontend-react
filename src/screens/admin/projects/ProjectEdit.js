import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import { set } from 'date-fns'
import './projects.css'
import AuthenticatedUser from '../../auth/AuthenticatedUser'
export default function GalleriesEdit() {
    AuthenticatedUser()
    let { id } = useParams()
    const [project, setProject] = React.useState({
        name: '',
        video: '',
        oldVideo: '',
    })

    let history = useHistory()
    useEffect(() => {
        axios.get(BackendURL + 'api/projects/' + id).then((response) => {
            setProject((project) => {
                const updatedTestimonial = {
                    ...project,
                }
                updatedTestimonial.name = response.data.data.name
                updatedTestimonial.oldVideo = response.data.data.video

                return updatedTestimonial
            })
            console.log(response.data.data)
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', project.name)
        formData.append('video', project.video)
        formData.append('oldVideo', project.oldVideo)
        console.log(formData)
        axios
            .post(BackendURL + 'api/projects/update/' + id, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response)
                if (response.status == 201) {
                    history.push('/admin/projects')
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
                        <h6>Edit project</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Project Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Muhammad Salman'
                                value={project.name}
                                onChange={(e) =>
                                    setProject((project) => {
                                        const updatedTestimonial = {
                                            ...project,
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
                            <label for='video' className='form-label'>
                                Upload Video
                            </label>
                            <input
                                type='file'
                                name='video'
                                className='form-control'
                                onChange={(e) =>
                                    setProject((project) => {
                                        const updatedTestimonial = {
                                            ...project,
                                        }
                                        updatedTestimonial.video =
                                            e.target.files[0]

                                        return updatedTestimonial
                                    })
                                }
                            />
                            <input
                                type='hidden'
                                name='oldVideo'
                                className='form-control'
                                value={project.oldVideo}
                            />
                            <video
                                className='shadow rounded-lg mt-2'
                                controls
                                width='200'
                                height='auto'>
                                <source src={BackendURL + project.oldVideo} />
                            </video>
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Update project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
