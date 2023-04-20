import React from "react";
import history from "./history";
import { observer } from "mobx-react-lite";
// import { runInAction } from "mobx";
import clsx from "clsx";
import "./index.css";

const Navbar = (props) => {
  const [isActive, setIsActive] = React.useState(true);
  const { store } = props;

  const handleNav = (e) => {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
    setIsActive(true);
  };

  const classes = clsx({ "tab-active": isActive, "nav-brand": true,});
  const classHome=clsx({"nav-item": isActive})
  const classAbout=clsx({"nav-item": isActive})
  const classProduct=clsx({"nav-item": isActive})
  return (
    <>
      <nav className="navbar">
        <a href="/" className="nav-brand" onClick={handleNav}>
         Super Store
        </a>
        <ul>
          <li className="nav-item">
            <a href="/" className={classHome} onClick={handleNav}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" onClick={handleNav} className={classAbout}>
              About us
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" onClick={handleNav} className={classProduct}>
              Products
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="nav-item nav-cart btn btn-accent"
              onClick={handleNav}
            >
              Cart ({store.cartCount()})
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">{props.children}</div>
    </>
  );
};

export default observer(Navbar);
