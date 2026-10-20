import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Login | React Auth Demo'
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !password) {
      setMessage('Please enter your email and password.')
      return
    }

    // Demo only: no real password verification happens.
    login(email.trim())
    navigate('/dashboard')
  }

  return (
    <div className="auth-container">
      <section className="auth-welcome">
        <h1>Welcome back!</h1>
        <p>Sign in to continue your journey with us.</p>
      </section>

      <section className="auth-form-section">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>Enter your details to access your account.</p>

          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {message && <p className="form-message">{message}</p>}

          <button type="submit">Sign in</button>

          <p className="auth-switch">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
    </div>
  )
}

export default Login