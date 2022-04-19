import React, { Component } from 'react'
import DSS from './DSS'
import CPS from './CPS'
import HSS from './HSS'
import SBAS from './SBAS'

class Services extends Component {
    state = {
        service: '',
    }
    componentDidMount() {
        const value = this.props.match.params.v
        if (value !== null && value !== undefined) {
            this.setState({ service: value })
        }
    }
    render() {
        return (
            <>
                {this.state.service === 'domestic-power-system' && <DSS />}
                {this.state.service === 'commercial-power-system' && <CPS />}
                {this.state.service === 'hybrid-solar-system' && <HSS />}
                {this.state.service === 'solar-batteries-and-storage' && (
                    <SBAS />
                )}
            </>
        )
    }
}

export default Services
