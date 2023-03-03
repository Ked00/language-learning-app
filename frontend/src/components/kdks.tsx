import React from "react";
import {Row, Col} from "react-bootstrap";
import { BlockButton } from "./Buttons/BlockButton";


export default function FilteredTest(){
    return(

       <div>
         <Row className="h-25 w-100 mt-4 border rounded p-1">
        <Col>
          <div className="d-flex">
            <img src={require("../../images/logo.png")} width="40px" height="40px" />
            <p className="p-2">My Shoes are blue</p>
          </div>

          <div className="d-flex">
            <img src={require("../../images/logo.png")} width="40px" height="40px" />
            <p className="">Mi zapatos eres azul</p>
          </div>
        </Col>

        <Col className="text-end">We rode into a blue car today</Col>
      </Row>
      <Row className="text-center mt-3">
        <BlockButton type="contained" text="Try again" />
      </Row>

      <Row className="h-25 w-100 mt-5 border rounded p-1">
        <Col>
          <div className="d-flex">
            <img src={require("../../images/logo.png")} width="40px" height="40px" />
            <p className="p-2">My Shoes are blue</p>
          </div>

          <div className="d-flex">
            <img src={require("../../images/logo.png")} width="40px" height="40px" />
            <p className="">Mi zapatos eres azul</p>
          </div>
        </Col>

        <Col className="text-end">We rode into a blue car today</Col>
      </Row>
      <Row className="text-center mt-3">
        <BlockButton type="contained" text="Try again" />
      </Row>
       </div>
    )
}