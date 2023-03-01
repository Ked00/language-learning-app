import React from "react";
import {Block} from "@mui/icons-material/";
import {Row, Col} from "react-bootstrap";

// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {PriceCard} from "../../components/Cards/PriceCard";

export function SubScription() {
  return (
    <div className="vh-100 overflow-hidden">
      <MainNavbar />

      <div className="text-center h-100">
        <h1 className="my-5">
          Improve your knowledge with
          <span className="text-danger"> WROFF </span>
          Premium
        </h1>

        <Block className="my-3" sx={{width: "150px", height: "150px"}} />
        <p className=" mb-5">No advertising</p>
        <Row>
          <PriceCard week="1 Week" price="$2" />
          <PriceCard week="2 Week" price="$5" />
          <PriceCard week="3 Week" price="$12" />
        </Row>

        <Row className="mt-5">
          <Col>
            <BlockButton
              type="contained"
              text="Paypal"
              className="w-75 ms-2 bg-secondary"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
