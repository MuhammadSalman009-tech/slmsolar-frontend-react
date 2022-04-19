import React from 'react'
import about_video from '../../assests/video1.mp4'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='my-3 py-2' id='about'>
            <div className='container-fluid'>
                <div className='row m-0'>
                    <div className='col-lg-4'>
                        <div className='d-flex flex-column align-items-center'>
                            <h2 className='my-2'>About Us</h2>
                            <p className='dblue'>
                                SLM Solar is your neighborhood operated solar
                                power System solutions. Our head office is located in
                                Sydney, providing the best quality solar
                                solutions. Our products and technologies are
                                planned for residential and commercial customers
                                to meet all forms of solar requirements. We
                                provide consultation, design, and installation.
                                Our team of inspectors, designers, and
                                installers are professionals and experienced.
                                They will personally assist you in choosing an
                                efficient and affordable system that best meets
                                your needs. SLM Solar provides sustainable
                                energy for our community with healthier
                                pollution-free earth. We are passionate about
                                our work.
                            </p>
                            <p>
                                Every day we work hard to make the life of our
                                clients better and happy. See our previous projects below
                            </p>
                            <Link to='/gallery'>
                                <button className='btn btn-success my-2 btn-lg shadow animate__animated animate__pulse animate__infinite'>
                                    Our Previous Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div>
                            <video
                                className='shadow rounded-lg'
                                controls
                                width='100%'
                                height='auto'>
                                <source src={about_video} />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
