import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import person1 from '../../assests/person1.png'
import person2 from '../../assests/person2.png'
import person3 from '../../assests/person3.png'
import person4 from '../../assests/person4.png'
import person5 from '../../assests/person5.png'
import person6 from '../../assests/person6.png'
import person7 from '../../assests/person7.png'
import person8 from '../../assests/person8.jpeg'
import { BackendURL } from '../../url'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation } from 'swiper'
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get(BackendURL + 'api/testimonials').then((response) => {
            // setTestimonials(response.data.data)
            setTestimonials(response.data.data)
            console.log(testimonials)
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
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide>
                            <div class='b-lblue d-flex flex-column align-items-center p-2 rounded-lg shadow'>
                                <img
                                    className='testimonial-img'
                                    src={BackendURL + testimonial.profile}
                                    alt='person1'
                                />
                                <h5 class='grey my-2'>{testimonial.name}</h5>
                                <p class='grey my-2 mx-2 text-center testimonial-paragraph'>
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
