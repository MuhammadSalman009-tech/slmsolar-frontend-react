import React, { Component } from 'react'
import Brands from './Brands'
import Faqs from './Faqs'
import Header from './Header'
import Products from './Products'
import Services from './Services'
import Teams from './Teams'
import Testimonials from './Testimonials'
import About from './About'
import Finance from './Finance'
import { Helmet } from 'react-helmet'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Solar Power System | Solar Systems | SLM Solar
                    </title>
                    <meta
                        name='description'
                        content='Are you looking for affordable and sustainable solar System energy solutions, SLM Solar with its market leading specialists provides solar Installations for your domestic and industrial use in best prices.'></meta>
                </Helmet>

                <Header />
                <Services />
                <Products />
                <About />
                <Brands />
                <Testimonials />
                <Finance />
                {/* <Teams /> */}
                <Faqs />
            </div>
        )
    }
}

export default Home
