"use client"

// @ts-ignore
// import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from '@/auth';
// import { logOut } from "../lib/actions";

export default function NavBar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark"
        id="nav1"
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <img src="/favicon.png" style={{ marginRight: "10px" }} alt="" />
            FoodExpress
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            {pathName !== "/login" ? (
              <Link href="/login">
                <button className="btn btn-outline-success">Login</button>
              </Link>
            ) : (
              <></>
            )}
            {/* <form
              action={logOut}
            >
              <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                {/* <PowerIcon className="w-6" /> */}
                {/* <div className="hidden md:block">Sign Out</div> */}
              {/* </button> */}
            {/* </form> */} 
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/dish-dash" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacts" className="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
