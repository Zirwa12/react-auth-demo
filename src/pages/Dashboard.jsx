import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  useEffect(() => {
    document.title = 'Dashboard | React Auth Demo'
  }, [])

  return (
    <main className="dashboard">
      <h1>Welcome to your Dashboard!</h1>
      <p>You are signed in as {user?.email}.</p>

      <p>
        This is a demo dashboard using React Context to share
        authentication state.
      </p>

      <button onClick={logout}>Log out</button>
    </main>
  )
}

export default Dashboard