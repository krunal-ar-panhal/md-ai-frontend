import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [message , setMessage] = useState("")
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSignup = async (e) => {
        e.preventDefault()
        const data = {
            email, password, username
        }
        console.log(data);
        
    }

  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-sm border shadow bg-white mx-auto p-8'>
            <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
            <form onSubmit={handleSignup} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input type="text" name='username' id='username' placeholder='Enter Username' required  onChange={(e) => setUsername(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>

                <input type="email" name='email' id='email' placeholder='Enter@gmail.com' required  onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
                <input type="password" name='password' id='password' placeholder='Enter your password'  onChange={(e) => setPassword(e.target.value)} required  className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
                {
                    message && <p>{message}</p>
                }

                <button className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md'>Sign Up</button>

                <p className='my-5 text-sm text-center'>Have an account <Link to='/login' className='text-blue-600 hover:font-bold hover:underline cursor-pointer'>Login</Link ></p>
            </form>
        </div>
    </section>
  )
}

export default Signup
