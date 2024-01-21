import React from 'react'
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout title={"Something went wrong!"}>
      <div className="pageNotFound">
        <h1 style={{ fontSize: "5rem" }}>404</h1>
        <h2>Page not Found!</h2>
        <button><Link to="/">Go Back</Link></button>
      </div>
    </Layout>
  )
}

export default PageNotFound;