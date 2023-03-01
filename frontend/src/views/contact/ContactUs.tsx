import React from "react";

//components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {Logo} from "../../components/Logo/Logo";

export function ContactUs() {
  return (
    <div className="vh-100">
      <MainNavbar />

      <div className="p-5 text-center">
        <h1 className="mb-4">Contact us</h1>
        <Logo width="150px" height="150px"/>
        <p className="my-3">WROFF Apps</p>
        <p className="mb-3">Birkebakken 26 2840 Denmark</p>
        <a href="https://www.wroff.com" target="_blank">
          www.wroff.com
        </a>
        <a href="mailto:wroff@wroff.com" className="mt-2 d-block">
          wroff@wroff.com
        </a>
      </div>
    </div>
  );
}
