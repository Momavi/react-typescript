import LoginForm from "./LoginForm/LoginForm";

function Login(props) {
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginForm LoginUser={props.LoginUser} />
    </div>
  )
}

export default Login;