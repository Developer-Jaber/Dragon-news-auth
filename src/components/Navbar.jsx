import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const Navbar = () => {
  const { user , logOut } = useContext(AuthContext)
  console.log(user);
  return (
    <div className='flex justify-between items-center'>
      <div className=''>{user && user.email}</div>
      <div className='space-x-5 nav'>
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className='flex items-center gap-2 login'>
        <div className=' '>
          {
            user && user?.email ? (
              <img className='mx-5 w-10' src={user.photoURL} alt="" />
            ) : (
              <img src={userIcon} alt='' />
            )
          }
        </div>
        <div>
        {
          user && user?.email ? (
          <button onClick={logOut} className='rounded-none btn btn-neutral'>LogOut</button>
          ) : (
          <Link to='/auth/login' className='rounded-none btn btn-neutral'>Login</Link>
        )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
