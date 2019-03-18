import React from "react";
import logo from "../final project/assets/images/eagle.png";
import user from "../final project/assets/images/user.png";
import { Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import SubNavigationItem from "./SubNavigationItem";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header className="header">
          <section class="header__top">
            <div id="j" class="header__top__wrapper">
              <Link to={"/"} class="header__top__wrapper--logo">
                <img
                  src={logo}
                  alt=""
                  class="header__top__wrapper--logo--image"
                />
              </Link>
              <div id="z" class="header__top__wrapper__search">
                <input
                  type="search"
                  placeholder="Search"
                  class="header__top__wrapper__search--content"
                />
                <button class="header__top__wrapper__search--button">
                  <i class="fab fa-searchengin awesome" />
                </button>
              </div>
              <div class="header__top__wrapper--user">
                <Link to={"/login"} class="header__top__wrapper--user--login">
                  <img src={user} width="30px;" alt="" />
                  <span class="header__top__wrapper--user--login--text">
                    Log In
                  </span>
                </Link>
                <Link
                  to={"/register"}
                  class="header__top__wrapper--user--login register"
                >
                  <img src={user} width="30px;" />
                  <span class="header__top__wrapper--user--login--text ">
                    Register
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section className="header__bottom">
            <nav className="header__bottom__navigation">
              <NavigationItem title="Platforms">
                <SubNavigationItem title="PC" />
                <SubNavigationItem title="PLAYSTATION 4" />
                <SubNavigationItem title="XBOX 1" />
                <SubNavigationItem title="3DS" />
                <SubNavigationItem title="PS VITA" />
              </NavigationItem>

              <NavigationItem title="Genres">
                <SubNavigationItem title="FPS" />
                <SubNavigationItem title="ACTION" />
                <SubNavigationItem title="ADVENTURE" />
                <SubNavigationItem title="HOROR" />
                <SubNavigationItem title="STRATEGY" />
                <SubNavigationItem title="ONLINE" />
                <SubNavigationItem title="QUEST" />
                <SubNavigationItem title="OTHER" />
              </NavigationItem>

              <NavigationItem title="Coming Soon">
                <SubNavigationItem title="MOST PREORDERED" />
                <SubNavigationItem title="MOST LIKED" />
                <SubNavigationItem title="MOST VIEWD" />
                <SubNavigationItem title="AWARD VINING" />
              </NavigationItem>

              <NavigationItem title="Best Sellers">
                <SubNavigationItem title="THIS WEEK" />
                <SubNavigationItem title="THIS MONTH" />
                <SubNavigationItem title="THIS YEAR" />
                <SubNavigationItem title="ALL TIME" />
              </NavigationItem>

              <NavigationItem title="Merchandise">
                <SubNavigationItem title="T-SHIRTS" />
                <SubNavigationItem title="MUGS" />
                <SubNavigationItem title="POSSTERS" />
                <SubNavigationItem title="TOYS" />
              </NavigationItem>
            </nav>
          </section>
        </header>
      </>
    );
  }
}

export default Header;
