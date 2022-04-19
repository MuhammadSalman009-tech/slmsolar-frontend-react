import React, { Component } from 'react'
import emailjs, { init } from 'emailjs-com'
init('user_dVaWAcTBhcTI8ol9PQhOd')

class ContactForm extends Component {
    state = {
        full_name: '',
        phone_number: '',
        email_address: '',
        location: '',
        bill: '',
        owner: '',
        message: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {
            email_address,
            full_name,
            phone_number,
            message,
            location,
            bill,
            owner,
        } = this.state

        emailjs.send('service_s3188ea', 'template_kqz6old', {
            full_name: full_name,
            message: message,
            phone_number: phone_number,
            location: location,
            bill: bill,
            owner: owner,
            reply_to: email_address,
            email_address: email_address,
        })

        alert('Your form has been submited. Our team will contact you soon')

        var state = {
            full_name: '',
            phone_number: '',
            email_address: '',
            location: '',
            message: '',
            disply: 'd-none',
        }
        this.setState(state)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='row mx-2'>
                        <div className='col-12 col-md-6'>
                            <input
                                type='text'
                                required
                                className='form-control my-1'
                                placeholder='Full Name'
                                value={this.state.full_name}
                                onChange={(e) =>
                                    this.setState({ full_name: e.target.value })
                                }
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input
                                type='text'
                                className='form-control my-1'
                                placeholder='Phone Number'
                                value={this.state.phone_number}
                                onChange={(e) =>
                                    this.setState({
                                        phone_number: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input
                                type='email'
                                required
                                className='form-control my-1'
                                placeholder='Email Address'
                                value={this.state.email_address}
                                onChange={(e) =>
                                    this.setState({
                                        email_address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input
                                type='text'
                                className='form-control my-1'
                                placeholder='Location'
                                value={this.state.location}
                                onChange={(e) =>
                                    this.setState({ location: e.target.value })
                                }
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <label>
                                Is your electricity bill cost more than 200$?
                            </label>
                            <select
                                type='radio'
                                className='form-control my-1'
                                value={this.state.bill}
                                onChange={(e) =>
                                    this.setState({ bill: e.target.value })
                                }>
                                <option>Select Option</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-6'>
                            <label>Are you a house owner?</label>
                            <select
                                type='radio'
                                className='form-control my-1'
                                value={this.state.owner}
                                onChange={(e) =>
                                    this.setState({ owner: e.target.value })
                                }>
                                <option>Select Option</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className='col-12'>
                            <div class='form-group'>
                                <textarea
                                    class='form-control my-1'
                                    placeholder='your message'
                                    rows='3'
                                    value={this.state.message}
                                    onChange={(e) =>
                                        this.setState({
                                            message: e.target.value,
                                        })
                                    }></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex w-100 justify-content-center'>
                        <button
                            type='submit'
                            className='btn btn-lg btn-info b-lblue grey'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm
