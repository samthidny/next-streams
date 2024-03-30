'use client'
import { login } from './actions'
import './signin.css';
import { useSearchParams } from 'next/navigation'
 

export default function LoginPage() {

  const searchParams = useSearchParams()
  const route = searchParams.get('route') || '';


  return (
    <div className="container">
      <div className="content">
        <h1>Sign In</h1>
        <form className="signin-form">
          <div className="row">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required defaultValue="test.user888@myrandomdomain.com" />
          </div>
          <div className="row">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required defaultValue="Test123!" />
            <input type="hidden" name="route" value={route} />
          </div>
          <div className="row">
            <button formAction={login}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}