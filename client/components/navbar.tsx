import Link from 'next/link';
// import NavLinks from './nav-links';
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar-logo-left">
        <div className="navbar-logo-left-container shadow-three w-nav">
            <div className="container">
                <div className="navbar-wrapper">
                    <h3 className="heading">BioForge</h3>
                    <nav className="nav-menu-wrapper w-nav-menu">
                        <ul className="nav-menu-two w-list-unstyled">
                            <li>
                                <Link
                                    href="/about"
                                    className="nav-link"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </li>
                            <li className="mobile-margin-top-10">
                                <Link
                                    href="/analysis"
                                    className="button-primary w-button"
                                >
                                    <span>Get Started</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  );
}
