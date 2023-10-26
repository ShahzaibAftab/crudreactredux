import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from './redux/UserReducer'

const Home = () => {
    const users = useSelector((state) => state.users)
     console.log(users)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div className='container'>
            <h2>CRUD - APP Using Redux</h2>
            <button onClick={() => navigate('/Create')} className='btn btn-success my-3'>Create + </button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    <button className='btn btn-sm btn-primary' onClick={() => navigate(`/Edit/${user.id}`)}>Edit</button>
                                    <button className='btn btn-sm btn-danger mx-2' onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home