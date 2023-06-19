import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>

        <h1>404 Error Page :( </h1>
        <NavLink to="/">Go Back</NavLink>

    </div>
  )
}
