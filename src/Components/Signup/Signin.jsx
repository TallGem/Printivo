import React from 'react'

const Signin = () => {
    // const [Email, setEmail] = useState("")
    // const [Password, setPassword] = useState("")
    
    return (
        <div>

            <div className='col-5 mx-auto'>
                <h1 className='text-center text-success'>Sign In</h1>


                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='mx-auto text-center'>
                    <button className='btn btn-primary w-100' >SUBMIT</button>
                </div>
            </div>

        </div>
    )
}

export default Signin