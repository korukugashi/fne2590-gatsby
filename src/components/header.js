import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Herisson}  from "../images/herisson.svg"

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
                <Herisson id="herisson" style={{ width: 70, height: 70, top: 0, left: 21 }} />
                <div style={{ top: 7, left: 104, width: 120 }}>FRANCE NATURE</div>
                <div style={{ top : 24, left: 100 }}>ENVIRONNEMENT</div>
                <div style={{ top: 5, left: 220, fontSize: '2rem' }}>25&nbsp;-&nbsp;90</div>
              </Link>
    
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="mainNavbar"
                onClick={ () => this.toggleHamburger() }
                onKeyDown={ (ev) => { if (ev === 13) this.toggleHamburger() } }
                role="button"
                tabIndex={0}
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
                    L'association
                  </Link>
    
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/fne-25-90/">
                      Qui sommes-nous ?
                    </Link>
                    <Link className="navbar-item" to="/fne-25-90/fne/">
                      Le mouvement FNE
                    </Link>
                    <Link className="navbar-item" to="/fne-25-90/missions/">
                      Nos missions
                    </Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item" to="/fne-25-90/actions/">
                      Actions en cours
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
    
                <Link className="navbar-item" to="/actualites/">Actualités</Link>
                <Link className="navbar-item" to="/mediatheque/">Médiathèque</Link>
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
