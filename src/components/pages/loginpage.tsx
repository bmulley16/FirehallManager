import LoginForm from "../loginform";
import SignupButton from "../banners/signupButton";
import LoginSubmitButton from "../banners/loginButton";

function LoginPage() {
  return (
    <>
      <div className="min-w-screen min-h-screen flex-column text-center ">
        <div className="w-3/5 h-3/5 mx-auto my-40 ">
          <h1>Welcome! Sign in or up Bellow:</h1>
          <div className=" border-black border-2 ">
            <LoginForm></LoginForm>
            <div>
              <LoginSubmitButton></LoginSubmitButton>
              <SignupButton></SignupButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
