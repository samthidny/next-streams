import { login } from './actions'
import './signin.css';

export default function LoginPage() {
  return (
    <div className="container">
      <div className="content">
        <h1>Sign In</h1>
        <form>
          <div className="row">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required value="test.user888@myrandomdomain.com" />
          </div>
          <div className="row">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required value="Test123!" />

          </div>
          <div className="row">
            <button formAction={login}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}