import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#697077]">
      <div className="section-container py-20">
        <div className="footer text-base-content">
          <nav>
            <h6 className="footer-title text-white">Services</h6>
            <Link className="link text-white link-hover">Branding</Link>
            <Link className="link text-white link-hover">Design</Link>
            <Link className="link text-white link-hover">Marketing</Link>
            <Link className="link text-white link-hover">Advertisement</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Company</h6>
            <Link className="link text-white link-hover">About us</Link>
            <Link className="link text-white link-hover">Contact</Link>
            <Link className="link text-white link-hover">Jobs</Link>
            <Link className="link text-white link-hover">Press kit</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <Link className="link text-white link-hover">Terms of use</Link>
            <Link className="link text-white link-hover">Privacy policy</Link>
            <Link className="link text-white link-hover">Cookie policy</Link>
          </nav>
          <form>
            <h6 className="footer-title text-white">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item text-white">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
