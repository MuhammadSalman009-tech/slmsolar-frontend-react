import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import '../dashboard.css'
export default function ProjectCreate() {
    const [name, setName] = React.useState('')
    const [video, setVideo] = React.useState(null)
    let history = useHistory()

    const handleSubmit = (e) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('video', video)
        console.log(formData)
        e.preventDefault()
        // console.log(email, password)
        axios
            .post(BackendURL + 'api/projects', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response)
                history.push('/admin/projects')
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
                        <h6>Add New Project</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Project Name
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
                            <label for='video' className='form-label'>
                                Upload Video
                            </label>
                            <input
                                type='file'
                                name='video'
                                required
                                className='form-control'
                                onChange={(e) => setVideo(e.target.files[0])}
                            />
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Add Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
