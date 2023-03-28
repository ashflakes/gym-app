import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'
import { useAuthContext } from './hooks/useAuthContext'
import Create from './pages/create/Create'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route 
                path='/' 
                element={user ? <Dashboard /> : <Navigate to='/login' />} >
              </Route>
              <Route 
                path='/signup' 
                element={!user ? <Signup /> : <Navigate to='/login' />}>
              </Route>
              <Route 
                path='/login' 
                element={!user ? <Login /> : <Navigate to='/' />} >
              </Route>
              <Route 
                path='/create' 
                element={user ? <Create /> : <Navigate to='/login' /> }>
              </Route>
              <Route 
                path='/projects/:id' 
                element={user ? <Project /> : <Navigate to='/login' /> }>
              </Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
