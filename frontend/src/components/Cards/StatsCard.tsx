import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Col} from "react-bootstrap";
// components
import {companyInfo} from "../../business-logic/types/companyInfo";

type Props = {
  label: string;
  content: string;
};

export function StatsCard(props: Props) {
  return (
    <Col className="p-2">
      <Card className="w-100 d-flex justify-content-center align-items-center text-center">
        <CardContent>
          <Typography>{props.label}</Typography>
          <Typography variant="h5" sx={{color: companyInfo.company_color}}>
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </Col>
  );
}
