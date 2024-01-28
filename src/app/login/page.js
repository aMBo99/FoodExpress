import Link from "next/link";
import "./login.css";
import { Metadata } from 'next';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <>
      <div>
        <div className="login-container">
          <h3 className="login-title">Welcome!</h3>
          <form action="/" id="form"> {/* should be dispatch */}
            <div className="input-group">
              <label for="email">Email</label>
              <input
                type="email"
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
                required
                id="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
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

function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in 
      {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
    </Button>
  );
}