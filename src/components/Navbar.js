import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import './Navbar.css'
import Logo from '../assets/gym_logo.png'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="logo" />
          <span>GymApp</span>
        </li>

        {!user && 
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        }

        {user && 
          <>
          <li>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
            </li>
          </>
        }
        
        
      </ul>
    </div>
  )
}
