import LoginForm from "../loginform";
import Signup from "../banners/signupform";
import LoginSubmitButton from "../banners/loginButton";

function LoginPage() {
  return (
    <>
      <div className=" flex min-h-screen min-w-screen text-center ">
        <LoginForm></LoginForm>
        <Signup></Signup>
      </div>
    </>
  );
}

export default LoginPage;
