import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Col} from "react-bootstrap";
// components
import {companyInfo} from "../../types/companyInfo";

type Props = {
  week?: string;
  price?: string;
  classname?: string
  variantWeek?: string
  variantPrice?:string
};

export function PriceCard(props: Props) {
  return (
    <Col className="p-2">
      <Card className="mx-md-3 mx-2 w-100 h-100">
        <CardContent className="text-center">
          <Typography  component="div" className="">
            {props.week}
          </Typography>

          <Typography  variant="h5" sx={{color: companyInfo.company_color}}  className={`${props.classname}`}>
            {props.price}
          </Typography>
        </CardContent>
      </Card>
    </Col>
  );
}
