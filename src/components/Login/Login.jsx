import LoginForm from "./LoginForm/LoginForm";
import { LoginUser } from "../../redux/auth-reducer";

function Login(props) {

  const myData = { email: 'momavina@yandex.ru', password: 'rX9a!jqz_VA2n6d' }
  return (
    <div>
      <h2 onClick={() => {LoginUser(myData)}}>LOGIN</h2>
      <LoginForm />
    </div>
  )
}

export default Login;