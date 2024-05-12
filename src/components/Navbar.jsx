import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <header id="navbar-sticky" className="navbar nav-light">
        <div className="container">
          <nav>
            {/* Navbar Brand Logo */}
            {/* <a href="home-event.html" class="logo">
              <img src="public/assets/images/logo-dark.png" class="h-10 logo-dark" alt="Calo Project Logo">
              <img src="public/assets/images/logo-light.png" class="h-10 logo-light" alt="Calo Project Logo">
          </a> */}
            {/* Moblie Menu Toggle Button (Offcanvas Button) */}
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-gray-300 bg-slate-300/30"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#mobileMenu"
                data-hs-type="collapse"
              >
                <i className="uil uil-bars text-2xl" />
              </button>
            </div>
            {/* Nevigation Menu */}
            <div
              id="mobileMenu"
              className="hs-collapse overflow-hidden transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
            >
              <ul id="navbar-navlist" className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>
                            Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>
                            About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/schedule'>
                            Schedule
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/artist'>
                            Artist
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/ticket'>
                            Tickets
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/jadipartner'>
                            Jadi Partner
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/promotions'>
                            Apps Promotions
                    </Link>
                </li>
              </ul>
              {/* Download Button */}
              <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-gray-200 lg:border-none">
                <a href="#price" className="nav-btn">
                  Book Tickits
                </a>
              </div>
            </div>
            {/* Download Button */}
            <div className="hidden lg:flex items-center">
              <a href="#price" className="nav-btn">
                Book Tickits
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar