import React from 'react'
import ImageGallery from 'react-image-gallery'
import video1 from '../assests/video1.mp4'
import video2 from '../assests/video2.mp4'
import video3 from '../assests/video3.mp4'
import video4 from '../assests/video4.mp4'
import video5 from '../assests/video5.mp4'
import video6 from '../assests/video1.mp4'

import base_hill1 from '../assests/base_hill1.jpg'
import base_hill2 from '../assests/base_hill2.jpg'
import base_hill3 from '../assests/base_hill3.jpg'
import base_hill4 from '../assests/base_hill4.jpg'
import base_hill5 from '../assests/base_hill5.jpg'
import base_hill6 from '../assests/base_hill6.jpg'
import casula1 from '../assests/casula1.png'
import casula2 from '../assests/casula2.jpg'
import casula3 from '../assests/casula3.jpg'
import casula4 from '../assests/casula4.jpg'
import casula5 from '../assests/casula5.jpg'
import casula6 from '../assests/casula6.jpg'
import casula7 from '../assests/casula7.jpg'
import prestons1 from '../assests/prestons1.png'
import prestons2 from '../assests/prestons2.jpg'
import prestons3 from '../assests/prestons3.jpg'

import llandilo1 from '../assests/llandilo1.png'
import llandilo2 from '../assests/llandilo2.png'
import llandilo3 from '../assests/llandilo3.jpg'
import llandilo4 from '../assests/llandilo4.jpg'
import llandilo5 from '../assests/llandilo5.jpg'

import kemps_creek1 from '../assests/kemps_creek1.png'
import kemps_creek2 from '../assests/kemps_creek2.png'

import miller1 from '../assests/miller1.jpg'
import miller2 from '../assests/miller2.jpg'
import miller3 from '../assests/miller3.jpg'
import miller4 from '../assests/miller4.jpg'
import miller5 from '../assests/miller5.jpg'

import newproject1 from '../assests/image1.jpg'
import newproject2 from '../assests/image2.jpg'

import shield_harbour1 from '../assests/shield_harbour1.jpg'
import shield_harbour2 from '../assests/shield_harbour2.jpg'

import { Helmet } from 'react-helmet'
import axios from 'axios'
import { BackendURL } from '../url'

const base_hill = [
    {
        original: base_hill1,
        thumbnail: base_hill1,
    },
    {
        original: base_hill2,
        thumbnail: base_hill2,
    },
    {
        original: base_hill3,
        thumbnail: base_hill3,
    },
    {
        original: base_hill4,
        thumbnail: base_hill4,
    },
    {
        original: base_hill5,
        thumbnail: base_hill5,
    },
    {
        original: base_hill6,
        thumbnail: base_hill6,
    },
]

const casula = [
    {
        original: casula1,
        thumbnail: casula1,
    },
    {
        original: casula2,
        thumbnail: casula2,
    },
    {
        original: casula3,
        thumbnail: casula3,
    },
    {
        original: casula4,
        thumbnail: casula4,
    },
    {
        original: casula5,
        thumbnail: casula5,
    },
    {
        original: casula6,
        thumbnail: casula6,
    },
    {
        original: casula7,
        thumbnail: casula7,
    },
]

const prestons = [
    {
        original: prestons1,
        thumbnail: prestons1,
    },
    {
        original: prestons2,
        thumbnail: prestons2,
    },
    {
        original: prestons3,
        thumbnail: prestons3,
    },
]

const shield_harbour = [
    {
        original: shield_harbour1,
        thumbanil: shield_harbour1,
    },
    {
        original: shield_harbour2,
        thumbanil: shield_harbour2,
    },
]

const llandilo = [
    {
        original: llandilo1,
        thumbnail: llandilo1,
    },
    {
        original: llandilo2,
        thumbnail: llandilo2,
    },
    {
        original: llandilo3,
        thumbnail: llandilo3,
    },
    {
        original: llandilo4,
        thumbnail: llandilo4,
    },
    {
        original: llandilo5,
        thumbnail: llandilo5,
    },
]

const miller = [
    {
        original: miller1,
        thumbnail: miller1,
    },
    {
        original: miller2,
        thumbnail: miller2,
    },
    {
        original: miller3,
        thumbnail: miller3,
    },
    {
        original: miller4,
        thumbnail: miller4,
    },
    {
        original: miller5,
        thumbnail: miller5,
    },
]

const kemps_creek = [
    {
        original: kemps_creek1,
        thumbnail: kemps_creek1,
    },
    {
        original: kemps_creek2,
        thumbnail: kemps_creek2,
    },
]

const newproject = [
    {
        original: newproject1,
        thumbnail: newproject1,
    },
    {
        original: newproject2,
        thumbnail: newproject2,
    },
]

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
        }
    }
    componentDidMount() {
        axios.get(BackendURL + 'api/projects').then((response) => {
            this.setState({ projects: response.data.data })
            console.log(this.state.projects)
        })
    }
    render() {
        const { projects } = this.state
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
                            {projects.map((project) => (
                                <div className='col-lg-6'>
                                    <video
                                        className='shadow rounded-lg'
                                        controls
                                        width='100%'
                                        height='auto'>
                                        <source
                                            src={BackendURL + project.video}
                                        />
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <h2 className='my-2 text-center'>Image Gallery</h2>
                    <p className=' text-center'>
                        These are the images of our previous projects with
                        location tag
                    </p>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>BASS HILL</h2>
                            <ImageGallery items={base_hill} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Casula</h2>
                            <ImageGallery items={casula} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Prestons</h2>
                            <ImageGallery items={prestons} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Llandilo</h2>
                            <ImageGallery items={llandilo} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Kemps Creek</h2>
                            <ImageGallery items={kemps_creek} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Shield Harbour</h2>
                            <ImageGallery items={shield_harbour} />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className=' text-center'>Miller</h2>
                            <ImageGallery items={miller} />
                        </div>

                        <div className='col-lg-6'>
                            <h2 className=' text-center'>New Project</h2>
                            <ImageGallery items={newproject} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
