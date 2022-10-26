import { PersonAddAlt1 } from "@styled-icons/material-outlined";
const axios = require("axios").default;
import { useEffect, useState } from "react";
import TopCart from "./TopCart";
import Link from "next/link";
import { useRouter } from "next/router";
import productApi from "../src/api/products";

const Navbar = () => {
  const router = useRouter();
  let [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [dropDownS, setDropDownS] = useState(false);
  const handleToggle = () => {
    setShow(true);
  };
  const getNavApi = async () => {
    try {
      productApi
        .getnavbar()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log("res", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNavApi();
  }, []);
  return (
    <>
      <div className="sidebar only-mobile hidden">
        <div className="mob-search">
          <div className="search-icon-box" />
          <p>Search of item</p>
        </div>
        <div
          id="scrollViews"
          className="main-search"
          style={{ display: "none" }}
        >
          <div className="search-input-area">
            <div
              style={{
                width: "100%",
                borderRadius: ".08rem",
                boxSizing: "border-box",
              }}
            >
              <form
                autoComplete="off"
                style={{
                  background: "#f2f2f2",
                  display: "flex",
                  paddingLeft: "10px",
                }}
              >
                <div className="display-flex-center-content">
                  <div className="align-self">
                    <div className="search-icon-box" />
                  </div>
                </div>
                <div style={{ width: "100%", marginLeft: ".26666667rem" }}>
                  <input
                    type="text"
                    placeholder="Search for item"
                    defaultValue
                    className="search-input"
                  />
                </div>
              </form>
            </div>
            <div
              className="display-flex-center-content"
              style={{ paddingLeft: "10px" }}
            >
              <span
                className="align-self"
                style={{ color: "#0e0d0d73", fontSize: "11px" }}
              >
                Cancel
              </span>
            </div>
          </div>
          {/**/}
          <div className="tags">
            <div className="title">
              <span>Popular Searches</span>
            </div>
            <div
              className="list-tags"
              style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
            >
              <div className="chip">scalloped swimwear</div>
              <div className="chip">party</div>
              <div className="chip">fluffy</div>
              <div className="chip">crop tops</div>
              <div className="chip">tees</div>
              <div className="chip">jeans</div>
              <div className="chip">intimates</div>
              <div className="chip">twist sweaters</div>
            </div>
          </div>
          {/**/}
        </div>
        <div className="content">
          <div className="mob-list">
            <ul>
              <li>
                <div className="category-nav">
                  <div className="cate-inner">
                    {data &&
                      data.slice(0, 5).map((data) => {
                        console.log(data, "data name");
                        return (
                          <>
                            <h1> data {data.name}</h1>
                          </>
                        );
                      })}
                  </div>
                  <div
                    className="category-img"
                    style={{
                      backgroundImage:
                        "url(https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Men-1270783577199.jpg)",
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="only-mobile">
        <div
          className="showHeader header h-mobile-fixed"
          style={{ zIndex: 14 }}
        >
          <div className="container" style={{ height: "35px" }}>
            <div style={{ display: "flex" }}>
              <div
                className="div-height"
                style={{
                  width: "95px",
                  paddingRight: "14px",
                  paddingLeft: "10px",
                }}
              >
                <Link
                  href="/"
                  aria-current="page"
                  className="img logo-effect router-link-exact-active router-link-active"
                >
                  <img src="/images/sehgal-logo.png" />
                </Link>
              </div>
            </div>
            <div className="form">
              <form>
                <div className="input">
                  <input
                    type="search"
                    placeholder="Search Products"
                    defaultValue
                  />
                  <button aria-label="search">
                    <svg viewBox="0 0 17 17">
                      <title>Search</title>
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                        data-v-8c18c444
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <nav
              className="user_links"
              style={{ position: "relative", top: "-8px" }}
            >
              <a aria-label="search" className="only-mobile">
                <svg
                  xmlns="http: //www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                >
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                    data-v-8c18c444
                  />
                </svg>
              </a>
              <a href="/notifications" className="only-mobile">
                <span style={{ position: "relative" }}>
                  <img src="https://www.clicky.pk/_nuxt/img/notification.e7d837a.svg" />
                </span>
              </a>
              <div className="mobile-wishlist">
                <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 18">
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01A5.733 5.733 0 0 1 9.79 1.564l.205.199z"
                    data-v-8c18c444
                  />
                </svg>
              </div>
              <span className="cart__icon">
                <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"
                    data-v-8c18c444
                  />
                </svg>
              </span>
            </nav>
          </div>
        </div>
        <div
          id="scrollViews"
          className="main-search"
          style={{ display: "none" }}
        >
          <div className="search-input-area">
            <div
              style={{
                width: "100%",
                borderRadius: ".08rem",
                boxSizing: "border-box",
              }}
            >
              <form
                autoComplete="off"
                style={{
                  background: "#f2f2f2",
                  display: "flex",
                  paddingLeft: "10px",
                }}
              >
                <div className="display-flex-center-content">
                  <div className="align-self">
                    <div className="search-icon-box" />
                  </div>
                </div>
                <div style={{ width: "100%", marginLeft: ".26666667rem" }}>
                  <input
                    type="text"
                    placeholder="Search for item"
                    className="search-input"
                  />
                </div>
              </form>
            </div>
            <div
              className="display-flex-center-content"
              style={{ paddingLeft: "10px" }}
            >
              <span
                className="align-self"
                style={{ color: "#0e0d0d73", fontSize: "11px" }}
              >
                Cancel
              </span>
            </div>
          </div>
          <div className="tags">
            <div className="title">
              <span>Popular Searches</span>
            </div>
            <div
              className="list-tags"
              style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
            >
              <div className="chip">scalloped swimwear</div>
              <div className="chip">party</div>
              <div className="chip">fluffy</div>
              <div className="chip">crop tops</div>
              <div className="chip">tees</div>
              <div className="chip">jeans</div>
              <div className="chip">intimates</div>
              <div className="chip">twist sweaters</div>
            </div>
          </div>
        </div>
      </header>
      <header className="only-desktop">
        <div className="header">
          <div className="container">
            <Link
              href="/"
              aria-current="page"
              aria-label="Goto home"
              className="logo logo-effect router-link-exact-active router-link-active"
            >
              <img
                src="/images/sehgal-logo.png"
                alt="sehgal logo"
                style={{ marginLeft: "-69px", justifyContent: "space-between" }}
              />
            </Link>

            <nav className="cat">
              <>
                {data.slice(0, 6).map((data) => {
                  return (
                    <>
                      <div className="l">
                        <span
                          style={{ color: "#000" }}
                          onClick={() => router.push("/categories")}
                        >
                          {data.name}
                        </span>
                        <div className="background" />
                        <div className="mega">
                          <div className="dropdown">
                            <div className="grid">
                              <div
                                className=""
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                }}
                              >
                                <div style={{ marginRight: "20px" }}>
                                  <ul className="row nav_row">
                                    {data.get_subcategories
                                      .slice(0, 7)
                                      .map((dta) => {
                                        console.log(dta.name, "data");
                                        return (
                                          <>
                                            <li
                                              className="col-3 row_li"
                                              style={{
                                                margin: "0px 30px",
                                                cursor: "pointer",
                                              }}
                                              onClick={() =>
                                                router.push("/collections")
                                              }
                                            >
                                              {dta.name}
                                            </li>
                                          </>
                                        );
                                      })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                <div className="l">
                  <span style={{ color: "#000" }}>More</span>
                  <div className="background" />
                  <div className="mega">
                    <div className="dropdown row">
                      <div className="grid">
                        <div className="">
                          <div style={{ marginRight: "20px" }}>
                            <ul className="row">
                              {data.slice(6).map((dta) => {
                                return (
                                  <>
                                    <li className="col-3">{dta.name}</li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/sale">
                  <div className="lii" style={{ cursor: "pointer" }}>
                    <span style={{ color: "red", marginLeft: "3px" }}>
                      Sales
                    </span>
                  </div>
                </Link>
              </>
            </nav>
            <div className="form">
              <form>
                <div className="input">
                  <input type="search" placeholder="Search Products" />
                  <button aria-label="search" className="btn-effect">
                    <svg viewBox="0 0 17 17">
                      <title>Search</title>
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <nav className="user_links">
              <a aria-label="search" className="only-mobile">
                <svg
                  xmlns="http: //www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                >
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                  />
                </svg>
              </a>
              <a
                href="/my/account"
                aria-label="account"
                className="only-mobile"
              >
                <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    fill="#000"
                    d="M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z"
                  />
                </svg>
              </a>
              <a className="only-desktop">
                <span style={{ position: "relative", top: "2px" }}>
                  <img src="https://www.clicky.pk/_nuxt/img/notification.e7d837a.svg" />
                </span>
                <div class="links_drop notify-drop">
                  <object>
                    <div class="dark">
                      <a>Notifications</a>
                    </div>{" "}
                    <div class="not-found">
                      <h4>no notification</h4>
                    </div>
                  </object>
                </div>
              </a>
              <a className="only-desktop">
                <svg
                  xmlns="http: //www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onMouseOver={() => setDropDownS(!dropDownS)}
                >
                  <path
                    fill="#000"
                    d="M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z"
                  />
                </svg>

                {dropDownS ? (
                  <div className="links_drop">
                    <object>
                      <div className="dark" onClick={() => setShow(!show)}>
                        <a onClick={() => setDropDownS(false)}>Sign in</a>{" "}
                        <a>Join</a>
                      </div>{" "}
                      <nav className="dropdown-list">
                        <Link href="/account">
                          <div className="ac acount-drop">My Account</div>
                        </Link>
                        <Link href="/myorders">
                          <div className="ord acount-drop">My Orders</div>
                        </Link>
                        <Link href="/wishlist">
                          <div className="wish acount-drop">My Wishlist</div>
                        </Link>
                      </nav>
                    </object>
                  </div>
                ) : null}
              </a>
              <div className="wishlist-log">
                <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 18">
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01A5.733 5.733 0 0 1 9.79 1.564l.205.199z"
                  />
                </svg>
              </div>
              <TopCart />
            </nav>
          </div>
        </div>
      </header>
      {show ? (
        <div className="sideNavbar">
          <ul className="sidebarr d__flex">
            <div className="desktop_container">
              <div id="slide" className="desktop_signup">
                <nav class="tabs">
                  <div class="register">
                    <p>Login or Signup </p>
                    <img
                      onClick={() => setShow(false)}
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMmYyZjJmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzggLTg5KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OCA4OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3IDkwKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xOSwxLjksMTcuMSwwLDkuNSw3LjYsMS45LDAsMCwxLjksNy42LDkuNSwwLDE3LjEsMS45LDE5bDcuNi03LjZMMTcuMSwxOSwxOSwxNy4xLDExLjQsOS41WiIvPjwvZz48L2c+PC9zdmc+"
                    />
                  </div>
                </nav>
                <div>
                  <section>
                    <div class="form desk_form">
                      <div class="sign_up_form">
                        <form
                          data-v-1f0429f0=""
                          novalidate="novalidate"
                          autocomplete="off"
                        >
                          <div data-v-1f0429f0="" class="margin">
                            <span data-v-1f0429f0="" class="mobile_no_box">
                              <input
                                data-v-1f0429f0=""
                                type="number"
                                pattern="\d*"
                                name="phone"
                                placeholder="Mobile Number"
                                class="input_padding"
                                aria-required="true"
                                aria-invalid="false"
                              />{" "}
                              <span data-v-1f0429f0="" class="country_code">
                                +92
                              </span>
                            </span>{" "}
                            <div data-v-1f0429f0="" class="btn-options">
                              <button data-v-1f0429f0="" type="button">
                                Login with OTP
                              </button>{" "}
                              <button data-v-1f0429f0="" type="button">
                                Login with password
                              </button>
                            </div>{" "}
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default Navbar;
