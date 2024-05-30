import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
          <ul>
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
            <li><a className="link link-hover">Advertisement</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
          <ul>
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
          <ul>
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Newsletter</h6>
          <form className="form-control">
            <label className="label mb-2">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="email" placeholder="username@site.com" className="input input-bordered join-item" />
              <button type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-base-content hover:text-primary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-base-content hover:text-primary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-base-content hover:text-primary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-base-content hover:text-primary">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Nxg Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
