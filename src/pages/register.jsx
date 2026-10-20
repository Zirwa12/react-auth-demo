import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    document.title = 'Register | React Auth Demo'
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !password) {
      setMessage('Please complete all fields.')
      return
    }

    setMessage('Demo registration successful! You can now log in.')
  }

  return (
    <div className="auth-container">
      <section className="auth-welcome">
        <h1>Join us today!</h1>
        <p>Create an account and take the first step with us.</p>
      </section>

      <section className="auth-form-section">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Create account</h2>
          <p>Fill in your details to get started.</p>

          <label htmlFor="register-name">Full name</label>
          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="register-email">Email address</label>
          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {message && <p className="form-message">{message}</p>}

          <button type="submit">Create account</button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </div>
  )
}

export default Register