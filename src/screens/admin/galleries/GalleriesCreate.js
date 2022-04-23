import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import SideNav from '../../../common/SideNav'
import { BackendURL } from '../../../url'
import '../dashboard.css'
export default function GalleriesCreate() {
    const [name, setName] = React.useState('')
    const [image1, setImage1] = React.useState(null)
    const [image2, setImage2] = React.useState(null)
    const [image3, setImage3] = React.useState(null)
    const [image4, setImage4] = React.useState(null)
    const [image5, setImage5] = React.useState(null)
    const [image6, setImage6] = React.useState(null)
    const [image7, setImage7] = React.useState(null)
    const [image8, setImage8] = React.useState(null)
    const [image9, setImage9] = React.useState(null)
    const [image10, setImage10] = React.useState(null)
    let history = useHistory()

    const handleSubmit = (e) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.append('image4', image4)
        formData.append('image5', image5)
        formData.append('image6', image6)
        formData.append('image7', image7)
        formData.append('image8', image8)
        formData.append('image9', image9)
        formData.append('image10', image10)
        console.log(formData)
        e.preventDefault()
        // console.log(email, password)
        axios
            .post(BackendURL + 'api/galleries', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response)
                history.push('/admin/galleries')
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
                        <h6>Add New gallery</h6>
                        <div className='mb-3'>
                            <label for='name' className='form-label'>
                                Gallery Name
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
                            <label for='image1' className='form-label'>
                                Image1
                            </label>
                            <input
                                type='file'
                                name='image1'
                                required
                                className='form-control'
                                onChange={(e) => setImage1(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image2' className='form-label'>
                                Image2
                            </label>
                            <input
                                type='file'
                                name='image2'
                                required
                                className='form-control'
                                onChange={(e) => setImage2(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image3' className='form-label'>
                                Image3
                            </label>
                            <input
                                type='file'
                                name='image3'
                                required
                                className='form-control'
                                onChange={(e) => setImage3(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image4' className='form-label'>
                                Image4
                            </label>
                            <input
                                type='file'
                                name='image4'
                                required
                                className='form-control'
                                onChange={(e) => setImage4(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image5' className='form-label'>
                                Image5
                            </label>
                            <input
                                type='file'
                                name='image5'
                                required
                                className='form-control'
                                onChange={(e) => setImage5(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image6' className='form-label'>
                                Image6
                            </label>
                            <input
                                type='file'
                                name='image6'
                                required
                                className='form-control'
                                onChange={(e) => setImage6(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image7' className='form-label'>
                                Image7
                            </label>
                            <input
                                type='file'
                                name='image7'
                                required
                                className='form-control'
                                onChange={(e) => setImage7(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image7' className='form-label'>
                                Image7
                            </label>
                            <input
                                type='file'
                                name='image7'
                                required
                                className='form-control'
                                onChange={(e) => setImage8(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image8' className='form-label'>
                                Image8
                            </label>
                            <input
                                type='file'
                                name='image8'
                                required
                                className='form-control'
                                onChange={(e) => setImage8(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image9' className='form-label'>
                                Image9
                            </label>
                            <input
                                type='file'
                                name='image9'
                                required
                                className='form-control'
                                onChange={(e) => setImage9(e.target.files[0])}
                            />
                        </div>
                        <div className='mb-3'>
                            <label for='image10' className='form-label'>
                                Image10
                            </label>
                            <input
                                type='file'
                                name='image10'
                                required
                                className='form-control'
                                onChange={(e) => setImage10(e.target.files[0])}
                            />
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-sm'>
                                Add gallery
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
