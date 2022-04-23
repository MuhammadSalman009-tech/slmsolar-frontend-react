import ImageGallery from 'react-image-gallery'
import React, { useState, useEffect } from 'react'
import './gallery.css'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { BackendURL } from '../url'
export default function Gallery() {
    const [projects, setProjects] = useState([])
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        axios.get(BackendURL + 'api/projects').then((response) => {
            // setTestimonials(response.data.data)
            setProjects(response.data.data)
            // console.log(projects)
        })
        axios.get(BackendURL + 'api/galleries').then((response) => {
            // console.log(response.data.data)
            setGalleries(response.data.data)
            // console.log(galleries)
        })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Gallery| Solar Systems | SLM Solar</title>
                <meta
                    name='description'
                    content='Slm solar previous completed project videos and images in gallery regarding solar systems.'></meta>
            </Helmet>
            <div>
                <div className='container'>
                    <h1 className='my-2 text-center'>Our Projects</h1>
                    <p className=' text-center'>
                        These are the videos of our previous projects
                    </p>
                    <div className='row m-0'>
                        {projects.map((project, index) => (
                            <div className='col-lg-6' key={index}>
                                <video
                                    className='shadow rounded-lg'
                                    controls
                                    width='100%'
                                    height='auto'>
                                    <source src={BackendURL + project.video} />
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='my-2 text-center'>Image Gallery</h2>
                <p className=' text-center'>
                    These are the images of our previous projects with location
                    tag
                </p>
                <div className='row'>
                    {galleries.map((gallery, index) => {
                        var images = [
                            {
                                original: BackendURL + gallery.image1,
                                thumbnail: BackendURL + gallery.image1,
                            },
                            {
                                original: BackendURL + gallery.image2,
                                thumbnail: BackendURL + gallery.image2,
                            },
                            {
                                original: BackendURL + gallery.image3,
                                thumbnail: BackendURL + gallery.image3,
                            },
                            gallery.image4
                                ? {
                                      original: BackendURL + gallery.image4,
                                      thumbnail: BackendURL + gallery.image4,
                                  }
                                : '',
                            gallery.image5
                                ? {
                                      original: BackendURL + gallery.image5,
                                      thumbnail: BackendURL + gallery.image5,
                                  }
                                : '',
                            gallery.image6
                                ? {
                                      original: BackendURL + gallery.image6,
                                      thumbnail: BackendURL + gallery.image6,
                                  }
                                : '',
                            gallery.image7
                                ? {
                                      original: BackendURL + gallery.image7,
                                      thumbnail: BackendURL + gallery.image7,
                                  }
                                : '',
                            gallery.image8
                                ? {
                                      original: BackendURL + gallery.image8,
                                      thumbnail: BackendURL + gallery.image8,
                                  }
                                : '',
                            gallery.image9
                                ? {
                                      original: BackendURL + gallery.image9,
                                      thumbnail: BackendURL + gallery.image9,
                                  }
                                : '',
                            gallery.image10
                                ? {
                                      original: BackendURL + gallery.image10,
                                      thumbnail: BackendURL + gallery.image10,
                                  }
                                : '',
                        ]
                        return (
                            <div className='col-lg-6' key={index}>
                                <h2 className='text-center'>{gallery.name}</h2>
                                <ImageGallery items={images} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
