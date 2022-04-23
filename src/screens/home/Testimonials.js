import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { BackendURL } from '../../url'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination } from 'swiper'
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get(BackendURL + 'api/testimonials').then((response) => {
            // setTestimonials(response.data.data)
            setTestimonials(response.data.data)
            // console.log(testimonials)
        })
    }, [])
    return (
        <div className='b-grey py-3'>
            <div className='container'>
                <div className='text-center mt-2'>
                    <h2>Testimonials</h2>
                    <p>What our clients say about us?</p>
                </div>
                <Swiper
                    // install Swiper modules
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    className='h-auto'
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='b-lblue d-flex flex-column align-items-center p-2 rounded-lg shadow h-100 w-100'>
                                <img
                                    className='testimonial-img'
                                    src={BackendURL + testimonial.profile}
                                    alt='person1'
                                />
                                <h5 className='grey my-2'>
                                    {testimonial.name}
                                </h5>
                                <p className='grey my-2 mx-2 text-center testimonial-paragraph'>
                                    {testimonial.about}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
