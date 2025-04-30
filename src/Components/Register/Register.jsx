import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name,email, password);
  };

  return (
    <div className="card mx-auto mt-8 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center py-4">Register Here</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn mt-4">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-600 link-hover" to={"/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
