import React from 'react'
import bulb from '../../assests/bulb.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( <
        div className = 'b-grey shadow' >
        <
        div className = 'container pt-5' >
        <
        div className = 'row m-0' >
        <
        div className = 'col-sm-12 col-md-4' >
        <
        p className = 'dblue' > Welcome To, < /p> <
        h1 className = 'h2 font-weight-bold dblue' > SLM Solar < /h1> <
        p className = 'dblue' >
        SLM Solar is an Australian Solar Retailer based in Sydney, NSW.Our products and technologies are planned
        for residential and commercial customers to meet all forms of solar requirements. <
        /p>

        <
        p className = 'dblue' >
        We only offer our customers the highest quality products available on the market
        for the best prices that you will find.With SLM solar you will be assured to be peace of mind. <
        /p> <
        Link to = '/offers' >
        <
        button className = 'btn btn-warning btn-lg shadow animate__animated animate__pulse animate__infinite' >
        Limited Time Offers <
        /button> <
        /Link>

        <
        /div>

        <
        div className = 'col-sm-12 col-md-8 ' >
        <
        div clasName = '' >
        <
        img className = 'img-fluid'
        src = { bulb }
        alt = 'solar pannel' /
        >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default Header