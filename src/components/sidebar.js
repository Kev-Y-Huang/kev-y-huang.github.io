import React from "react"
import Image from "./image"
import MediaQuery from "react-responsive"

import sidebarStyle from "./style/sidebar.module.scss"
import HamburgerMenu from "react-hamburger-menu"
import { Link } from "gatsby"

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      navClassName: "",
      menuLinks: props.menuLinks
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
      navClassName: this.state.open ? "" : "open"
    })
  }

  render() {
    return (
      <div className={sidebarStyle.sidebar}>
        <div className={sidebarStyle.clickable}>
          <MediaQuery query="(min-width: 992px)">
            <Image/>
          </MediaQuery>
          <h2>
            Kevin Huang
          </h2>
          <MediaQuery query="(max-width: 992px)">
            <div className={sidebarStyle.hamburger}>
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
          </MediaQuery>
        </div>
        <nav className={sidebarStyle.nav + this.state.navClassName}>
          <ul>
            {this.state.menuLinks.map(link => (
              <li key={link.name}>
                <Link exact to={link.link} className={sidebarStyle.sidebarItem}
                      activeClassName={sidebarStyle.sidebarItemActive}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
