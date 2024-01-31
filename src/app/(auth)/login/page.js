"use client";

import Link from "next/link";
import "../auth.css";
import { Metadata } from "next";
// import { useFormState, useFormStatus } from 'react-dom';
// import { authenticate } from '@/app/lib/actions';
import { loginUser } from "../../(home)/lib/dataqueries";
import { useState } from "react";
import { useRouter } from 'next/navigation';

// export const metadata = {
//   title: 'Login',
// };

export default function Login() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !passwd) return; // maybe not needed since 'required'
    try {
      const user = await loginUser(email, passwd);
      if (!user) {
        alert("Invalid email/password combination");
      } else {
        console.log("User logged in: ", user);
        alert("Successful login!");
        router.push('/');
      }
    } catch (error) {
      console.error("Error during login: ", error);
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
            {" "}
            {/* should be dispatch */}
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
              Sign In
            </button>
            {/* <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
            {/* <p className="text-sm text-red-500">{errorMessage}</p> */}
            {/* </> */}
            {/* )} */}
            {/* </div> */}
          </form>
          <p
            style={{ color: "white", fontWeight: "lighter", marginTop: "20px" }}
          >
            Don't have any account yet? Register{" "}
            <Link href="/register" style={{ color: "lightskyblue" }}>
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

// function LoginButton() {
//   'use client'
//   const { pending } = useFormStatus();

//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in
//       {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
//     </Button>
//   );
// }
