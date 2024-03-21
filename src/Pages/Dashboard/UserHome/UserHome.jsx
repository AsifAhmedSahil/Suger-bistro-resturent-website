import React from 'react'
import useAuth from '../../../hooks/useAuth'

const UserHome = () => {
    const {user} = useAuth()
  return (
    <div>
        <h3>Hi, Welcome</h3>
        {
            user?.displayName ? user.displayName : 'back'
        }
      
    </div>
  )
}

export default UserHome
