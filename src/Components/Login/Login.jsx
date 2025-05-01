import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const { signinUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login user
    signinUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card mx-auto mt-8 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center py-4">Login Now</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn mt-4">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-600 hover:underline" to={"/register"}>
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
