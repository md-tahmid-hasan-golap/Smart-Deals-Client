import React, { useContext } from "react";
import { AuthconText } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthconText);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Register Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(name, email, number, password);
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
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* Number */}
          <label className="label">Number</label>
          <input
            type="number"
            name="number"
            className="input"
            placeholder="Number"
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

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <button onClick={handelSignInWithGoogle} className="btn btn-outline">
          <FcGoogle size={25} />
          Sign In With Google
        </button>
      </div>

      <p className="text-center mb-5">
        Already Have An Account{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
