import React from "react";
import {MoreHoriz, Logout} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import {Offcanvas} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

// hooks
import {useVisible} from "../../reuseable-hooks/visible";
import {SideMenuListItem} from "./SideMenuListItem";

export function SideMenu() {
  const open = useVisible(false);
  const navigate = useNavigate();

  return (
    <>
      <MoreHoriz onClick={open.oppisiteOfCurrent} />
      <Offcanvas show={open.isVisible} onHide={open.strict}>
        <Offcanvas.Header closeButton className="d-flex justify-content-end"></Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex justify-content-center my-5">
            <Avatar
              sx={{width: "100px", height: "100px"}}
              src="http://localhost:3000/images/userPic.png"
              onClick={() => navigate("/profile")}
            />
          </div>

          <ul className="list-unstyled">
            <SideMenuListItem item="Home" href="history" />
            <SideMenuListItem item="Play" href="prep" />
            <SideMenuListItem item="Score" />
            <SideMenuListItem item="Contact" href="contact" />
          </ul>
        </Offcanvas.Body>
        <p className="ms-5 fs-5">
          <span>
            <Logout />
          </span>
          Logout
        </p>
      </Offcanvas>
    </>
  );
}
