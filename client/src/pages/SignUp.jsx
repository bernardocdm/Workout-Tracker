import React from 'react'

function SignUp() {
  return (
    <div className="h-screen flex">
        <div className="w-1/2 bg-[url('/src/assets/geminiGym.png')]">

        </div>

        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="w-96 p-6">
            <form className="flex flex-col items-center space-y-4" >
              <h1 className="flex items-center justify-center font-sans font-semibold text-2xl text-black">Welcome!</h1>
              <p className="flex items-center justify-center font-sans font-extralight text-xl text-black p-4">Create your account by putting your information below</p>

              <input 
                type="text"
                placeholder="Name" 
                className="input" 
              />

              <label className="input validator">
                <input type="email"
                  placeholder="Email" 
                  required 
                // value={email} 
                // onChange={e => setEmail(e.target.value)} 
                />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>

              <input 
                type="password" 
                placeholder="Password" 
                className="input" 
                // value={password}
                // onChange={e => setPassword(e.target.value)} 
              />


              <button className="btn btn-neutral mx-auto" type="submit">Sign Up</button>

            </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp