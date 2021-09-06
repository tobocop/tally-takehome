import React from "react";
import logo from "./assets/images/home_logo.png";
import "./Header.scss"

export const Header = ({children}: {children: React.ReactNode}) =>
  <header className="Header">
    <div className="logoWrap">
      <img src={logo} alt="logo" />
    </div>
    <div>
      {children}
    </div>
  </header>
