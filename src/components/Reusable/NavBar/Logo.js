import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={"/"} id='logo' >
        <img src="https://wallhaven.cc/images/layout/logo_sm.png" alt="wallhaven" />
    </Link>
  )
}

export default Logo
