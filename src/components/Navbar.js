import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* add condition for autentication */}
      {/* add logo*/}
      {/* add logout */}
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/festival">Festivals</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <form action="">
              <button>Logout</button>
            </form>
          </li>
        </ul>
      </header>
      <header>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/festival">Festivals</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
