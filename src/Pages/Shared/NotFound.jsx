import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError()
    return (
      <>
      
        <div className='container text-center  pt-5 text-danger mt-32 '>
          <h1  >Ops! An Error Ocurred!</h1>
          <br />
          {error && (
            <div>
              <p >{error.statusText || error.message}</p>
              <p>{error.status}</p>
            </div>
          )}
        </div>
        <div>
            <Link to="/">
            <button className="btn btn-error mt-24 flex mx-auto">
                Go to Home Page
            </button>
            </Link>
        </div>
      </>
    )
}

export default NotFound
