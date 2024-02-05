import React from 'react'
import Layout from '../components/layout/layout.js'
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="png">
        <h1 className="png-tittle">404</h1>
        <h2 className="png-heading">Oops!Page Not Found</h2>
        <Link className="png-btn" to="/">Go Back</Link>
        </div>
    </Layout>
  )
}

export default PageNotFound
