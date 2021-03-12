import React from "react";
import { Form } from "react-bootstrap";

function InputSelect(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
                size="sm" 
                as="select"
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                >
                <option>{props.option1}</option>
                <option>{props.option2}</option>
            </Form.Control>
        </Form.Group>
    )
}

export default InputSelect;