import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card mx-auto mt-8 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center py-4">Login Now</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn mt-4">Login</button>
        </form>
        <p>Don't have an account? <Link className="text-blue-600 hover:underline" to={'/register'}>Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
