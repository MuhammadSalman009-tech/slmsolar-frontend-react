import React from 'react'
import { useHistory } from 'react-router-dom'

export default function AuthenticatedUser() {
    let history = useHistory()
    if (!localStorage.getItem('loggedIn')) {
        history.push('/login')
    }
}
