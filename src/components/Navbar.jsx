import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <div className="bg-white">
      <div className="navbar section-container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/">Web Design</Link>
                      <Link to="/">Web Development</Link>
                      <Link to="/">UX/UI Design</Link>
                      <Link to="/">Digital Marketing</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
            <span className="text-xl font-bold text-[#697077] hidden sm:block">
              Webcode
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Web Design</Link>
                    <Link to="/">Web Development</Link>
                    <Link to="/">UX/UI Design</Link>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <Link className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  {user?.displayName && (
                    <span className="font-semibold text-primaryText">
                      {user?.displayName}
                    </span>
                  )}
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden inline-flex items-center justify-center">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="user profile photo"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold text-primary">
                      {user?.displayName.charAt(0)}
                    </span>
                  )}
                </span>
              </Link>
              {/* <button
                onClick={() => logout()}
                className="btn btn-primary bg-primary text-white px-8"
              >
                Logout
              </button> */}
              <button
                onClick={() => logout()}
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              >
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-primary px-8 hidden sm:flex hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/price"
                className="btn btn-primary bg-primary text-white px-8"
              >
                Start Free Trial
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
