"use client"

import "bootstrap/dist/js/bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
