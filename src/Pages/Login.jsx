import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [message , setMessage] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        const data = {
            email, password
        }
        console.log(data);
        
    }

  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-sm border shadow bg-white mx-auto p-8'>
            <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
            <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                <input type="email" name='email' id='email' placeholder='Enter@gmail.com' required  onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
                <input type="password" name='password' id='password' placeholder='Enter your password'  onChange={(e) => setPassword(e.target.value)} required  className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
                {
                    message && <p>{message}</p>
                }

                <button className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md'>Log In</button>

                <p className='my-5 text-sm text-center'>Don't have an account <Link to='/signup' className='text-blue-600 hover:font-bold hover:underline cursor-pointer'>Signup</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Login
