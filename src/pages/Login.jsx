import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
    const {signInUser, setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleLoginForm = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email,password)
        .then((result) =>{
            const user = result.user
            setUser(user);
            toast.success('Successfully toasted!')
            navigate(location?.state ? location.state : "/")
        })
        .catch((erro)=>{
            toast.error('invalid password');
            console.log(erro);
        })

    }
  return (
    <div className='min-h-screen hero'>
        <div className='bg-base-100 rounded-none w-full max-w-md card shrink-0'>
            <h1 className="pt-7 font-bold text-2xl text-center">Login your account</h1>
          <form onSubmit={handleLoginForm} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name="email"
                type='email'
                placeholder='email'
                className='input-bordered input'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name="password"
                type='password'
                placeholder='password'
                className='input-bordered input'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='rounded-none btn btn-neutral'>Login</button>
            </div>
          </form>
          <p className="mb-10 font-semibold text-center">Dont’t Have An Account ? <Link to="/auth/signUp" className="font-semibold text-red-500">Register</Link></p>
        </div>
        <Toaster></Toaster>
    </div>
  )
}

export default Login
