import React from "react";

//components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {Logo} from "../../components/Logo/Logo";

export function ContactPage() {
  return (
    <div className="vh-100">
      <MainNavbar />
      <div className="d-flex flex-column align-items-center justify-content-center h-75">
        <h1 className="p-4">Contact us</h1>
        <Logo width="150px" height="150px" />
        <a href="https://github.com/Ked00?tab=repositories" target="_blank" className="mt-2">
          my github
        </a>
        <a href="mailto:wroff@wroff.com" className="mt-2">
          allorganizedspace@gmail.com
        </a>
      </div>
    </div>
  );
}
