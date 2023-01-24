import { Button } from "@mui/material";
import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <>
    <div className="footer-background-image"></div>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div class="list-group">
                <p className="my-footer-nav-link">General </p>
                <li className="my-footer-nav-link">About us</li>
                <li className="my-footer-nav-link">Contact us</li>
                <li className="my-footer-nav-link"> E-mail us</li>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="list-group">
                <p className="my-footer-nav-link">Branches</p>
                <li className="my-footer-nav-link">Sandeepani Junior College</li>
                <li className="my-footer-nav-link">Sri Sandeepani Junior College</li>
                <li className="my-footer-nav-link">Aryabhatta Junior College</li>
                <li className="my-footer-nav-link">Sri bharathi Junior College</li>
              </div>
            </div>

            <div className="col-lg-4 ">
              <p>Drop your email to get important notifications</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control"
              />
              <Button variant="contained" color="secondary" className="mt-3">
                proceed
              </Button>
            </div>
          </div>
        </div>

        <h5 className="text text-center text-danger mt-5">
          Designed and developed by <span>[ Company name ]</span> &copy; 2023
          all rights reserved
        </h5>
      </div>
    </>
  );
};

export default Footer;
