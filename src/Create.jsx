import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './redux/UserReducer'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h2>Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input placeholder='Enter your name' type='text' name='name' className='form-control' onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input placeholder='hello@example.com' type='email' name='email' className='form-control' onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'> Submit</button>
                </form>
            </div>

        </div>
    )
}
