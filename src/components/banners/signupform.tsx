function Signup() {
  return (
    <div className="bg-[url('src\\assets\\loginScreenBackground.jpg')] max-w-full">
      <div className=" flex-column mt-[47%]  ">
        <h1>New Here?</h1>

        <p>
          Sign up and discover how Emergico's framework can benefit your agency!{" "}
        </p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
