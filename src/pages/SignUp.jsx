const SignUp = () => {
  return (
    <div className='min-h-screen hero'>
      <div className='bg-base-100 rounded-none w-full max-w-md card shrink-0'>
        <h1 className='pt-7 font-bold text-2xl text-center'>
          Register your account
        </h1>
        <form className='card-body'>
          {/* name fild */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='input-bordered input'
              required
            />
          </div>
          {/* photo url fild */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Photo URL</span>
            </label>
            <input
              type='text'
              placeholder='Enter Your PhotoURL'
              className='input-bordered input'
              required
            />
          </div>
          {/* email fild */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='email'
              className='input-bordered input'
              required
            />
          </div>
          {/* password fild */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='input-bordered input'
              required
            />
          </div>
          <div className='form-control'>
            <label className='cursor-pointer label'>
              <input type='checkbox' defaultChecked className='checkbox' />
              <span className='label-text'>Accept Term & Conditions</span>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='rounded-none btn btn-neutral'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
