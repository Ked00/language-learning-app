import React, { ChangeEvent } from "react";
import {Form} from "react-bootstrap";

type Props ={
    label: string,
    controlId: string,
    name:string,
    value: string
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void
}

export function FormGroup(props: Props){
    return(
        <Form.Group className="w-100 mb-3" controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
        // change placeHolder
          placeholder={props.value}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          className="p-4"
        />
      </Form.Group>
    )
}