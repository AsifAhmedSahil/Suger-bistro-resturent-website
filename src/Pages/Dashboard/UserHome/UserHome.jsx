import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'

const UserHome = () => {
    const {user} = useAuth()
  return (
    <div>
      <Helmet>
            <title>Suger Bistro | user home </title>
        </Helmet>
        <h3>Hi, Welcome</h3>
        {
            user?.displayName ? user.displayName : 'back'
        }
      
    </div>
  )
}

export default UserHome
