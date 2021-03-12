import React from "react";
import { Form } from "react-bootstrap";

function Input(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name} 
                onChange={props.onChange}
                />
            <Form.Text className="text-muted">
                {props.message}
            </Form.Text>
        </Form.Group>
    )
}

export default Input;