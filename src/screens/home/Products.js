import React, { Component } from 'react'
import product1 from '../../assests/product1.png'
import product2 from '../../assests/product2.png'
import product3 from '../../assests/product3.png'
import product4 from '../../assests/product4.png'
import product5 from '../../assests/product5.png'
import b_products from '../../assests/b-products.png'
import { Link } from 'react-router-dom'

class Products extends Component {
    state = {}
    products = [{
            name: 'Solar Pannel',
            src: product1,
            url: 'products/solar-pannel',
        },
        {
            name: 'Solar Batteries',
            src: product2,
            url: 'products/solar-battery',
        },
        {
            name: 'Invertors',
            src: product3,
            url: 'products/invertors',
        },
        // {
        //     name: 'Micro Invertor',
        //     src: product5,
        //     url: 'products/micro-invertor',
        // },
        // {
        //     name: 'Hybrid Invertor',
        //     src: product4,
        //     url: 'products/hybrid-invertor',
        // },
    ]

    render() {
        return ( <
            div className = 'my-3 py-4'
            style = {
                {
                    backgroundImage: `url(${b_products})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }
            } >
            <
            div className = 'text-center grey' >
            <
            h2 > Our Products < /h2> <
            p > We offer the best quality solar products < /p> <
            /div>

            <
            div className = 'container' >
            <
            div className = 'row m-0 d-flex justify-content-center flex-wrap' > {
                this.products.map((p) => ( <
                    div className = 'col-md-6 col-lg-4' >
                    <
                    a href = { p.url } >
                    <
                    div className = 'b-grey d-flex flex-column align-items-center my-2 rounded-lg shadow  hvr-sweep-to-top' >
                    <
                    img className = 'img-fluid'
                    src = { p.src }
                    alt = { p.name }
                    /> <
                    h5 className = 'my-2' > { p.name } < /h5> <
                    button type = 'button'
                    className = 'btn b-lblue btn-info grey my-3' >
                    View Details <
                    /button> <
                    /div> <
                    /a> <
                    /div>
                ))
            } <
            /div> <
            /div> <
            /div>
        )
    }
}

export default Products