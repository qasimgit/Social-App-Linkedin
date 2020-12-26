import React, { useState } from "react";
import "./login.css";
import linkedin from "../../assets/linkedin.svg";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const dispatch = useDispatch();
  const register = () => {
    e.preventDefault();

    if (!form.name) {
      return alert("Please Enter your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: form.name,
          photoURL: form.profilePic,
        });
      })
      .then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: form.name,
            photoUrl: form.profilePic,
          })
        );
      });
  };
  const LoginApp = (e) => {
    e.preventDefault();
  };

  const handleForm = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  return (
    <div className="login">
      <div className="login__header">
        <h1>LinkedIn</h1>
        <img src={linkedin} alt="logo" />
      </div>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleForm}
          value={form.name}
        />
        <input
          type="text"
          placeholder="Profile Pic URL"
          name="profilePic"
          value={form.profilePic}
          onChange={handleForm}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleForm}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleForm}
          value={form.password}
        />

        <button type="submit" onClick={register} className="submit__button">
          Sign in
        </button>
      </form>

      <p>
        Already have an account ?{" "}
        <span className="login__register" onClick={LoginApp}>
          Log in
        </span>
      </p>
    </div>
  );
};

export default Login;
