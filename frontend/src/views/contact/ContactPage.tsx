import React from "react";

//components
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";

export function ContactPage() {
  return (
    <div className="vh-100">
      <NavigationNavbar />
      <div className="d-flex flex-column align-items-center justify-content-center h-75">
        <h1>Contact us</h1>
        <img
          src="http://localhost:3000/images/userPic.jpeg"
          width="180px"
          height="180px"
          className="rounded-circle my-4"
        />
        <a href="https://github.com/Ked00?tab=repositories" target="_blank" >
          my github
        </a>
        <a href="mailto:wroff@wroff.com" className="mt-2">
          allorganizedspace@gmail.com
        </a>
      </div>
    </div>
  );
}
