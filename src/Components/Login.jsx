import React, { useContext } from "react";
import { AuthconText } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthconText);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Sign In Google Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-7 rounded-lg mx-auto">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <div className="mt-2">
            <a href="/forgot-password" className="link link-hover">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>

        <button onClick={handelSignInWithGoogle} className="btn btn-outline">
          <FcGoogle size={25} />
          Sign In With Google
        </button>
      </div>

      <p className="text-center mb-5">
        Already Dos't An Account{" "}
        <Link to="/register" className="text-blue-600 underline">
          Regsiter
        </Link>
      </p>
    </div>
  );
};

export default Login;
