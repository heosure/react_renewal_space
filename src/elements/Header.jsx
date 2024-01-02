import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SearchModal from "../components/SearchModal";

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="18"
    viewBox="0 0 448 512"
  >
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
  </svg>
);
const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 512 512"
  >
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
);
const barIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="18"
    viewBox="0 0 448 512"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

export default function Header({ open, setOpen }) {
  let [isActive, setIsActive] = useState(false);
  let [search, SetSearch] = useState(false);
  return (
    <header className="hd">
      <h1 className="logo">
        <Link to={"/"}>
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="SPACE로고" />
        </Link>
      </h1>
      <nav className="navBar">
        <div className="lang">
          <Link to={"kor"}>KOR</Link>
          <Link to={"eng"}>ENG</Link>
        </div>
        <ul className={`gnb ${isActive && "on"}`}>
          <li>
            <Link
              to={"tour"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              TOUR
            </Link>
          </li>
          <li>
            <Link
              to={"job"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              JOB
            </Link>
          </li>
          <li>
            <Link
              to={"product"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              PRODUCT
            </Link>
          </li>
          <li>
            <Link
              to={"project"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              to={"information"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              INFORMATION
            </Link>
          </li>
          <li>
            <Link
              to={"material"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              MATERIAL
            </Link>
          </li>

          <li>
            <Link
              to={"academia"}
              onClick={() => {
                setIsActive(false);
              }}
            >
              ACADEMIA
            </Link>
          </li>
        </ul>
        <LoginModal open={open} setOpen={setOpen} />
        <div className={`my ${isActive && "on"}`}>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {userIcon}
          </button>
          <SearchModal search={search} SetSearch={SetSearch} />
          <button
            onClick={() => {
              SetSearch(!search);
            }}
          >
            {searchIcon}
          </button>
          <div className="ham">
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {barIcon}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
