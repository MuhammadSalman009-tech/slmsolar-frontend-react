import React, { Component } from 'react'
import SolarPannel from './SolarPannel'
import SolarInvertor from './SolarInvertor'
import SolarBattery from './SolarBattery'
import MicroInvertor from './MicroInvertor';
import HybridInvertor from './HybridInvertor';
import SolarStringInvertor from './SolarStringInvertor';
import Invertors from './Invertors';

class Products extends Component {
    state = {
        product: '',
    }
    componentDidMount() {
        const value = this.props.match.params.v
        if (value !== null && value !== undefined) {
            this.setState({ product: value })
        }
    }
    render() {
        return (
            <>
                {this.state.product === 'solar-pannel' && <SolarPannel />}
                {this.state.product === 'solar-invertor' && <SolarInvertor />}
                {this.state.product === 'solar-battery' && <SolarBattery />}
                {this.state.product === 'micro-invertor' && <MicroInvertor />}
                {this.state.product === 'hybrid-invertor' && <HybridInvertor />}
                {this.state.product === 'solar-string-invertor' && <SolarStringInvertor/>}
                {this.state.product === 'invertors' && <Invertors/>}
            </>
        )
    }
}

export default Products
