import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackendURL } from '../../url'
import './auth.css'
export default function Login() {
    let history = useHistory()
    if (localStorage.getItem('loggedIn')) {
        history.push('/admin/testimonials')
    }
    const [email, setEmail] = React.useState('')
    const [loginError, setLoginError] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password)
        axios
            .post(BackendURL + 'api/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                if (response.data.status == 'success') {
                    localStorage.setItem(
                        'user',
                        JSON.stringify(response.data.user)
                    )
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('loggedIn', true)
                    history.push('/admin/testimonials')
                }
            })
            .catch(function (error) {
                // console.log(error.response.data.error)
                if (error.response.data.error) {
                    setLoginError(error.response.data.error)
                }
            })
    }

    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit} className='auth-form'>
                {loginError ? (
                    <div className='alert alert-danger'>{loginError}</div>
                ) : (
                    ''
                )}
                <h6>Login</h6>
                <div className='mb-3'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary btn-sm'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
