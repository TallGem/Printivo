import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to ="/signup">SIGN UP</Link>
        <Link to = "/signin">SIGN IN</Link>

    </nav>

    </>
  )
}

export default Navbar