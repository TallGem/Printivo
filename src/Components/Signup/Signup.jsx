import React from 'react'

const Signup = () => {

    // const [Firstname, setFirstname] = useState("")
    // const [Lastname, setLastname] = useState("")
    // const [Email, setEmail] = useState("")
    // const [Password, setPassword] = useState("")


    return (
        <div>
            <div className='col-5 mx-auto'>
                <h1 className='text-center text-success'>Sign Up</h1>

                <div className="mb-3">
                    <label className="form-label">Firstname</label>
                    <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Lastname</label>
                    <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} />
                </div>

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

export default Signup