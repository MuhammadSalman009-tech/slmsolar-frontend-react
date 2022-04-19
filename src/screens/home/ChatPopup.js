import React from 'react'
import pop from '../../assests/pop.mp3'
import emailjs, { init } from 'emailjs-com'
init('user_dVaWAcTBhcTI8ol9PQhOd')

class ChatPopup extends React.Component {
    state = {
        full_name: '',
        phone_number: '',
        email_address: '',
        message: '',
        disply: 'd-none',
    }

    componentDidMount() {
        // setTimeout(this.showPopup, 5000)
    }

    showPopup = () => {
        this.pop()
        this.setState({ disply: 'd-block' })
    }
    pop = () => {
        let pop = document.getElementById('pop')
        pop.play()
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { email_address, full_name, phone_number, message } = this.state

        emailjs.send('service_s3188ea', 'template_kqz6old', {
            full_name: full_name,
            message: message,
            phone_number: phone_number,
            location: '',
            bill: '',
            owner: '',
            reply_to: email_address,
            email_address: email_address,
        })

        alert('Your form has been submited.')

        var state = {
            full_name: '',
            phone_number: '',
            email_address: '',
            location: '',
            message: '',
            disply: 'd-none',
        }
        this.setState(state)
        // this.setState({disply: 'd-none'})
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        if (this.state.disply === 'd-none') {
                            this.pop()
                            this.setState({ disply: 'd-block' })
                        } else this.setState({ disply: 'd-none' })
                    }}
                    className='btn btn-info b-lblue contact-us '>
                    <i
                        className='fa fa-comments fa-2x  animate__animated animate__pulse animate__infinite'
                        aria-hidden='true'></i>
                    <audio id='pop'>
                        <source src={pop} type='audio/mpeg' />
                    </audio>
                </button>

                <div
                    className={`my-modal b-dblue p-2 py-2 shadow-lg round-border grey ${this.state.disply}`}>
                    <div className='d-flex justify-content-between '>
                        <h5 className='text-center my-2 ml-3'>Contact Us</h5>
                        <div className='cursor-pointer'
                        onClick={() => this.setState({disply: 'd-none'})}
                        >
                            {/* <i
                                className='fa fa-times fa-2x  animate__animated animate__pulse animate__infinite'
                                aria-hidden='true'></i> */}

                                <h2 className='mr-3 text-warning font-weight-bold'>x</h2>
                        </div>
                    </div>

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='row mx-2'>
                            <div className='col-12'>
                                <input
                                    type='text'
                                    // required
                                    className='form-control my-1'
                                    placeholder='Full Name'
                                    value={this.state.full_name}
                                    onChange={(e) =>
                                        this.setState({
                                            full_name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className='col-12'>
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
                            <div className='col-12'>
                                <input
                                    type='email'
                                    // required
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
            </div>
        )
    }
}

export default ChatPopup
