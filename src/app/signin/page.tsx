import { login } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required value="test@test.com"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required value="password" />
      <button formAction={login}>Log in</button>
    </form>
  )
}