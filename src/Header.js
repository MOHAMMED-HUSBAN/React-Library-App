import React from "react";
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header-col ">
            <h1>Library</h1>
          </div>
          <div className="header-col">
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
