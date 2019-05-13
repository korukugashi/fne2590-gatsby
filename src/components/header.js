import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Herisson}  from "../images/herisson.svg"
import { ReactComponent as Logo}  from "../images/logo.svg"

const Header = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active },
      () => {
        this.state.active
          ? this.setState({ navBarActiveClass: 'is-active' })
          : this.setState({ navBarActiveClass: '' })
      }
    )
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="container is-fluid">
            <div className="navbar-brand">
              <Link className="navbar-item logo" to="/" title={this.props.siteTitle}>
                <Herisson id="herisson" style={{ width: 37, height: 37, top: 0, left: 21 }} />
                <Logo style={{ width: 60,  height: 60 }} />
                <div style={{ top : 24, left: 18, width: 61 }}>FRANCE NATURE</div>
                <div style={{ top : 32, left: 16 }}>ENVIRONNEMENT</div>
                <div style={{ top: 41, left: 48, color: '#fff' }}>25&nbsp;-&nbsp;90</div>
              </Link>
    
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="mainNavbar"
                onClick={ () => this.toggleHamburger() }
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>
    
            <div id="mainNavbar" className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <div className="navbar-end">
                <Link className="navbar-item" to="/">Accueil</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="/fne-25-90/">
                    L'association FNE 25-90
                  </Link>
    
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/fne-25-90/">
                      Qui sommes-nous ?
                    </Link>
                    <Link className="navbar-item" to="/fne-25-90/fne/">
                      Le mouvement FNE
                    </Link>
                    <Link className="navbar-item" to="/fne-25-90/actions/">
                      Nos actions
                    </Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item" to="/fne-25-90/membres/">
                      Associations membres
                    </Link>
                    <Link className="navbar-item" to="/fne-25-90/partenaires/">
                      Partenaires
                    </Link>
                  </div>
                </div>
    
                <Link className="navbar-item" to="/publications/">Publications</Link>
                <Link className="navbar-item" to="/nous-rejoindre/">Nous rejoindre</Link>
                <Link className="navbar-item" to="/contact/">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
