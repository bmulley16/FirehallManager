import LoginForm from "../components/loginform";
import Signup from "../components/banners/signupform";

function LoginPage() {
  return (
    <div className=" flex min-h-screen min-w-screen text-center ">
      <LoginForm></LoginForm>
      <Signup></Signup>
    </div>
  );
}

export default LoginPage;
