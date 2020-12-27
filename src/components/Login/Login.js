import React, { useState } from "react";
import "./login.css";
import linkedin from "../../assets/linkedin.svg";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const dispatch = useDispatch();
  // const history = useHistory();
  const LoginApp = (e) => {
    e.preventDefault();

    if (!form.name) {
      return alert("Please Enter your name");
    }

    auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: form.name,
            photoURL: form.profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth?.user.email,
                uid: userAuth?.user.uid,
                displayName: form.name,
                photoUrl: form.profilePic,
              })
            );
          });
        // .then(() => {
        //   history.push("/home");
        // });
      })
      .catch((err) => alert("error: ", err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert("error:", err.message));
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
          className="login__input"
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleForm}
          value={form.name}
        />
        <input
          className="login__input"
          type="text"
          placeholder="Profile Pic URL"
          name="profilePic"
          value={form.profilePic}
          onChange={handleForm}
        />
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleForm}
          value={form.email}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleForm}
          value={form.password}
        />

        <button type="submit" onClick={LoginApp} className="submit__button">
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
