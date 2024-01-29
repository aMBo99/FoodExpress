"use client";

import Link from "next/link";
import "./register.css";
import { useState } from "react";
import { registerUser, fetchUser } from "../../(home)/lib/dataqueries";

export default function Register() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !passwd) return; // maybe not needed since 'required'
    try {
      let user = await fetchUser(email, passwd);
      if (!user) {
        await registerUser(email, passwd);
        user = await fetchUser(email, passwd);
        console.log("User registered: ", user);
        alert("Registering successful, logged in already!");
      } else {
        alert("User already exists!");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswdInput(e) {
    setPasswd(e.target.value);
  }

  return (
    <>
      <div>
        <div className="login-container">
          <h3 className="login-title">Welcome!</h3>
          <form action="/" id="form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onInput={handleEmailInput}
                value={email}
                required
                id="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onInput={handlePasswdInput}
                value={passwd}
                required
                id="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="login-button"
            >
              Register
            </button>
          </form>
          <p
            style={{ color: "white", fontWeight: "lighter", marginTop: "20px" }}
          >
            Already have an account? Login{" "}
            <Link href="/login" style={{ color: "lightskyblue" }}>
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
