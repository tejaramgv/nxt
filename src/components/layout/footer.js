import React from 'react'
import {Link} from 'react-router-dom';

const footer = () => {
  return (
    <div className=" text-light p-3 footer">
      <h4 className="text-center">All Right Reserved &copy;Project Team</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
        |
        <Link to="/policy">Privacy Policy</Link>
      </p>

    </div>
  )
}

export default footer
