import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/UserReducer';

const Update = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input placeholder='Enter your name' type='text' name='name' className='form-control' value={uname} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input placeholder='hello@example.com' type='email' name='email' className='form-control' value={uemail} onChange={(e) => setEmail(e.target.value)} />
          </div><br />
          <button className='btn btn-info'> Update</button>
        </form>
      </div>

    </div>
  )
}

export default Update
